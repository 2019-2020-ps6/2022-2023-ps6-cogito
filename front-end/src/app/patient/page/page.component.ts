import { Component, HostListener, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { PatientService } from "src/services/patient.service";
import { Patient } from "src/models/patient.model";
import { ConfigurationService } from "src/services/configuration.service";
import { CONFIG_DEFAULT_3 } from "src/mocks/configuration.mock";

@Component({
    selector: "app-patient-page",
    templateUrl: "./page.component.html",
    styleUrls: ["./page.component.scss"]
})
export class PatientPageComponent implements OnInit {
    private patientList!: Patient[];
    public displayPatientList: Patient[];
    private startDisplayInd: number = -1;
    private nbDisplayPatients: number = 0;
    private margin!: number;
    private size!: number;
    configurationService: any;

    constructor(private patientService: PatientService, private router: Router, configurationService: ConfigurationService) {
        this.patientService.patientList$.subscribe((patientList: Patient[]): void => {
            this.patientList = patientList;
        });
        this.configurationService = configurationService;
        this.maxMargin();
        this.currentSize();
        this.nbDisplayPatients = this.numberRowPatients() * this.numberColPatients();
        this.displayPatientList = [];
        this.patientService.noSelectedPatient();
    }

    maxMargin(): void {
        this.margin = Math.max(window.innerWidth * 0.04, window.innerHeight * 0.04, 20);
    }

    currentSize(): void {
        let minSize: number = 130 + this.margin;
        this.size = Math.max(minSize, Math.floor(Math
            .min(window.innerWidth * 0.20 + this.margin, window.innerHeight * 0.20 + this.margin)));
    }

    numberRowPatients(): number {
        if (window.innerWidth < 700) {
            return 1;
        }
        return Math.max(1, Math.floor((window.innerWidth * 0.6) / this.size));
    }

    numberColPatients(): number {
        if (window.innerWidth < 700) {
            return 1;
        }
        return Math.max(1, Math.floor((window.innerHeight * (0.65*0.9)) / (this.size + 32)));
    }

    ngOnInit(): void {
        this.nextDisplayPatients();
        this.configurationService.setGlobalFont(CONFIG_DEFAULT_3.fontFamily);
        this.configurationService.setGlobalSize(CONFIG_DEFAULT_3.fontSize);
        console.log("PatientPageComponent");
    }

    @HostListener("window:resize")
    onWindowResize(): void {
        this.maxMargin();
        this.currentSize();
        this.startDisplayInd = -1;
        this.nbDisplayPatients = this.numberRowPatients() * this.numberColPatients();
        this.nextDisplayPatients();
    }

    hasNextOrPrevButtons(): boolean {
        return this.nbDisplayPatients < this.patientList.length;
    }

    nextDisplayPatients(): void {
        if (this.startDisplayInd == -1 || (this.startDisplayInd + this.nbDisplayPatients > this.patientList.length)) {
            this.startDisplayInd = 0;
        }
        else {
            this.startDisplayInd += this.nbDisplayPatients;
        }
        this.displayPatientList = this.patientList
                                      .slice(this.startDisplayInd, this.startDisplayInd + this.nbDisplayPatients);
    }

    prevDisplayPatients(): void {
        let tabLenght: number = this.patientList.length;
        let remLenght: number;
        if (this.startDisplayInd <= 0) {
            remLenght = tabLenght % this.nbDisplayPatients;
            this.startDisplayInd = tabLenght - ((remLenght == 0) ? this.nbDisplayPatients : remLenght);
        }
        else {
            remLenght = this.nbDisplayPatients;
            this.startDisplayInd -= remLenght;
        }
        this.displayPatientList = this.patientList
                                      .slice(this.startDisplayInd, this.startDisplayInd + remLenght);
    }

    selectPatient(patient: Patient): void {
        this.patientService.selectPatient(patient);
        // Lorsque l'on clique sur un patient, on récupère sa configuration et on la met en place
        // Sur le restant du site.
        this.configurationService.setGlobalFont(patient.configuration.fontFamily);
        this.configurationService.setGlobalSize(patient.configuration.fontSize);
        console.log("TEST");
        console.log(patient.configuration.fontFamily);
        console.log(patient.configuration.fontSize);
        let stage: number = patient.stage;
        if (stage <= 3) {
            this.router.navigateByUrl("/theme-page");
        }
        else if (stage == 4) {
            this.router.navigateByUrl("/quiz-page");
        }
        else {
            this.router.navigateByUrl("/game-page");
        }
    }
}

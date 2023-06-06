import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Patient } from "src/models/patient.model";
import { CONFIG_DEFAULT_3, CONFIG_DEFAULT_4, CONFIG_DEFAULT_5 } from "../../../mocks/configuration.mock";
import { myMap, myMap2 } from "../../../mocks/patient.mock";
import { STAT_GOOD_3, STAT_GOOD_4, STAT_GOOD_5 } from "../../../mocks/statistics.mock";
import { Configuration } from "../../../models/configuration.model";
import { Statistics } from "../../../models/statistics.model";
import { PatientPageListComponent } from "../profil_list/page.component";
import { PatientService } from "src/services/patient.service";


@Component({
    selector: "app-patient-form",
    templateUrl: "./page.component.html",
    styleUrls: ["./page.component.scss"]
})
export class CreationPatientComponent implements OnInit {
    patient: Patient = {
        id: 0,
        name: "",
        age: 0,
        birthdate: "",
        stage: 0,
        picture: "",
        statistics: {} as Statistics,
        configuration: {} as Configuration,

        quizResult: new Map<number, number[]>(),
        questionResult: new Map<number, boolean[]>(),

        themeIdList: [],
        quizIdList: [],
        quizToPlayList: [],
    };
    originalpatient?: Patient;
    private patientList!: Patient[];

    data: any;


    constructor(private patientService: PatientService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.patientService.patientList$.subscribe((patientList: Patient[]): void => {
            this.patientList = patientList;
        });
        this.patientService.selectedPatient$.subscribe((patient?: Patient): void => {
            if (patient !== undefined) {
                this.patient = patient;
                this.originalpatient = JSON.parse(JSON.stringify(patient));
            }
        }
        );
        this.data = this.route.snapshot.data['title'];
    }


    savePatient(): void {
        if(!this.checkPatientValidity()){
            console.log("Question is not valid");
        }
        else {
            if (this.patient.stage === 3) {
                this.patient.statistics = STAT_GOOD_3;
                this.patient.configuration = CONFIG_DEFAULT_3;
            } else if (this.patient.stage === 4) {
                this.patient.statistics = STAT_GOOD_4;
                this.patient.configuration = CONFIG_DEFAULT_4;
            } else if (this.patient.stage === 5) {
                this.patient.statistics = STAT_GOOD_5;
                this.patient.configuration = CONFIG_DEFAULT_5;
            }
            this.patient.quizResult = myMap
            this.patient.questionResult = myMap2
            this.patientService.addPatient(this.patient);
        }
    }

    checkPatientValidity(): boolean {
        return this.patient.name !== "" && this.patient.birthdate !== "" && this.patient.stage >= 3 && this.patient.stage <= 5;
    }
}

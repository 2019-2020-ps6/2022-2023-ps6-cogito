import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Patient } from "src/models/patient.model";
import { CONFIG_DEFAULT_3 } from "../../../mocks/configuration.mock";
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
            this.patientService.addPatient(this.patient as Patient);
        }
    }

    checkPatientValidity(): boolean {
        return this.patient.name !== "" && this.patient.birthdate !== "" && this.patient.stage >= 3 && this.patient.stage <= 5;
    }
}

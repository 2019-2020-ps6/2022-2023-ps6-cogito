import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { PatientService } from "src/services/patient.service";
import { Patient } from "../../../models/patient.model";


@Component({
    selector: "app-patient-form",
    templateUrl: "./page.component.html",
    styleUrls: ["./page.component.scss"]
})
export class CreationPatientComponent implements OnInit {
    patientToCreate = {
        name: "",
        birthdate: "",
        stage: 0,
        picture: "",
        themeIdList: [0],
        quizIdList: [0],
        quizToPlayList: [0]
    };
    patientToUpdate?: Patient;
    create: boolean = false;
    maxDate: Date = new Date();

    constructor(private patientService: PatientService, private router: Router) {
        this.create = this.router.url.endsWith("/creation-patient-page");
        this.patientToCreate.themeIdList = [];
        this.patientToCreate.quizIdList = [];
        this.patientToCreate.quizToPlayList = [];

        if (!this.create) {
            this.patientService.selectedPatient$.subscribe(patient => {
                this.patientToUpdate = patient;
            });
        }
    }

    ngOnInit(): void {
        this.maxDate = new Date();
    }

    createPatient(): void {
        this.patientToCreate.stage = Number.parseInt(this.patientToCreate.stage.toString());
        this.patientService.addPatient(this.patientToCreate);
        this.router.navigateByUrl("/profil");
    }

    updatePatient(): void {
        if (this.patientToUpdate) {
            this.patientToUpdate.stage = Number.parseInt(this.patientToUpdate.stage.toString());
            this.patientService.updatePatient(this.patientToUpdate);
            this.router.navigateByUrl("/profil");
        }
    }

    checkPatientValidity(): boolean {
        if (this.patientToUpdate) {
            return this.patientToUpdate.name !== "" && this.patientToUpdate.birthdate !== "" && this.patientToUpdate.stage > 0;
        }
        return this.patientToCreate.name !== "" && this.patientToCreate.birthdate !== "" && this.patientToCreate.stage > 0;
    }
}

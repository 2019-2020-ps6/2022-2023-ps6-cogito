import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Patient } from "src/models/patient.model";
import { PatientService } from "src/services/patient.service";


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
        themeIdList: [],
        quizIdList: [],
        quizToPlayList: []
    };
    data: string = "";
    maxDate: Date = new Date();

    constructor(private patientService: PatientService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.maxDate = new Date();
        this.data = this.route.snapshot.data['title'];
    }

    savePatient(): void {
        this.patientToCreate.stage = Number.parseInt(this.patientToCreate.stage.toString());
        this.patientService.addPatient(this.patientToCreate);
        this.router.navigateByUrl("/profil-list");
    }

    checkPatientValidity(): boolean {
        return this.patientToCreate.name !== "" && this.patientToCreate.birthdate !== "" && this.patientToCreate.stage > 0;
    }
}

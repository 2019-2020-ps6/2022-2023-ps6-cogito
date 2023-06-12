import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { PatientService } from "src/services/patient.service";
import { Patient } from "../../../models/patient.model";
import { Theme } from "../../../models/theme.model";
import { QuizService } from "../../../services/quiz.service";
import { ThemeService } from "../../../services/theme.service";


@Component({
    selector: "app-patient-form",
    templateUrl: "./page.component.html",
    styleUrls: ["./page.component.scss"]
})
export class CreationPatientComponent implements OnInit {
    patient: Patient = {
        id: 0,
        name: "",
        birthdate: "",
        stage: 0,
        picture: "",
        themeIdList: [],
        quizIdList: [],
        quizToPlayList: []
    };
    themeList: Theme[] = []
    create: boolean = false;
    maxDate: Date = new Date();

    constructor(private patientService: PatientService, private themeService: ThemeService, private quizService: QuizService, private router: Router) {
        this.create = this.router.url.endsWith("/creation-patient-page");

        if (!this.create) {
            this.patientService.selectedPatient$.subscribe(patient => {
                if (patient) {
                    this.patient = patient;
                }
            });
        }

        this.themeService.retrieveAllThemes();
        this.themeService.themeList$.subscribe(themeList => {
            this.themeList = themeList;
        })

        // make the same with quizzes
    }

    ngOnInit(): void {
        this.maxDate = new Date();
    }

    createPatient(): void {
        this.patient.stage = Number.parseInt(this.patient.stage.toString());
        this.patientService.addPatient(this.patient);
        this.router.navigateByUrl("/profil");
    }

    updatePatient(): void {
        if (!this.create) {
            this.patient.stage = Number.parseInt(this.patient.stage.toString());
            this.patientService.updatePatient(this.patient);
            this.router.navigateByUrl("/profil");
        }
    }

    checkPatientValidity(): boolean {
        return this.patient.name !== "" && this.patient.birthdate !== "" && this.patient.stage > 0;
    }
}

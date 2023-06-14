import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { PatientService } from "src/services/patient.service";
import { CONFIG_DEFAULT_3, CONFIG_DEFAULT_4, CONFIG_DEFAULT_5 } from "../../../mocks/configuration.mock";
import { Configuration } from "../../../models/configuration.model";
import { Patient } from "../../../models/patient.model";
import { Theme } from "../../../models/theme.model";
import { ConfigurationService } from "../../../services/configuration.service";
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
        configuration: {} as Configuration,
        themeIdList: [],
        quizIdList: [],
        quizToPlayList: []
    };
    themeList: Theme[] = [];
    create: boolean = false;
    maxDate: Date = new Date();
    private configList: Configuration[] = [];

    constructor(private patientService: PatientService, private themeService: ThemeService,
                private configurationService: ConfigurationService, private router: Router) {
        this.create = this.router.url.endsWith("/creation-patient-page");

        if (!this.create) {
            this.patientService.selectedPatient$.subscribe(patient => {
                if (patient) {
                    this.patient = patient;
                }
            });
        }

        this.configurationService.liste$.subscribe(configList => {
            this.configList = configList;
        })

        this.themeService.retrieveAllThemes();
        this.themeService.themeList$.subscribe(themeList => {
            this.themeList = themeList;
        });

        // make the same with quizzes
    }

    ngOnInit(): void {
        this.maxDate = new Date();
    }

    selectTheme(theme: Theme): void {
        let index = this.patient.themeIdList.indexOf(theme.id);
        if (index !== -1) {
            this.patient.themeIdList.splice(index, 1);
            this.removeThemeQuizzes(theme);
        }
        else {
            this.patient.themeIdList.push(theme.id);
            this.addThemeQuizzes(theme);
        }
    }

    private removeThemeQuizzes(theme: Theme) {
        for (let quiz of theme.quizzesList) {
            let index = this.patient.quizIdList.indexOf(quiz.id);
            if (index !== -1) {
                this.patient.quizIdList.splice(index, 1);
            }
        }
    }

    private addThemeQuizzes(theme: Theme) {
        for (let quiz of theme.quizzesList) {
            if (!this.patient.quizIdList.includes(quiz.id)) {
                this.patient.quizIdList.push(quiz.id);
            }
        }
    }

    createPatient(): void {
        this.patient.stage = parseInt(this.patient.stage.toString(), 10);
        this.addDefaultConfig();
        this.patientService.addPatient(this.patient);
        this.router.navigateByUrl("/profil");
    }

    addDefaultConfig() {
        this.configurationService.retrieveAllConfigurations();
        let index: number;

        if (this.patient.stage === 3) {
            index = this.configList.findIndex(config => config.name === CONFIG_DEFAULT_3.name);
        } else if (this.patient.stage === 4) {
            index = this.configList.findIndex(config => config.name === CONFIG_DEFAULT_4.name);
        } else {
            index = this.configList.findIndex(config => config.name === CONFIG_DEFAULT_5.name);
        }
        console.log("index config: " + index);

        this.patient.configuration = this.configList[index];
    }

    updatePatient(): void {
        if (!this.create) {
            this.patient.stage = parseInt(this.patient.stage.toString(), 10);
            this.patientService.updatePatient(this.patient);
            this.router.navigateByUrl("/profil");
        }
    }

    checkPatientValidity(): boolean {
        return this.patient.name !== "" && this.patient.birthdate !== "" && this.patient.stage > 0;
    }
}

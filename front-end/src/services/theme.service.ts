import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

import { THEME_LIST } from "../mocks/theme.mock";
import { Patient } from "../models/patient.model";
import { Theme } from "../models/theme.model";
import { PatientService } from "./patient.service";

@Injectable({
    providedIn: "root"
})
export class ThemeService {
    private themeList: Theme[] = [];
    public themeList$: BehaviorSubject<Theme[]> = new BehaviorSubject<Theme[]>([]);
    private selectedPatient?: Patient;
    public selectedTheme$: BehaviorSubject<Theme | undefined> = new BehaviorSubject<Theme | undefined>(undefined);

    constructor(private patientService: PatientService, private router: Router) {
        this.patientService.selectedPatient$.subscribe((patient: Patient | undefined): void => {
            if (this.router.url.includes("/theme-page") && patient === undefined) {
                this.router.navigateByUrl("/patient-page");
            }

            this.selectedPatient = patient;

            function patientThemeList(patient: Patient): Theme[] {
                let themeList: Theme[] = [];

                for (let themeId of patient.themeIdList) {
                    let index: number = THEME_LIST.findIndex((theme: Theme): boolean => theme.id === themeId);
                    themeList.push(THEME_LIST[index]);
                }

                themeList.sort((a, b) => a.title.localeCompare(b.title));
                return themeList;
            }

            this.themeList = (patient == undefined) ? [] : patientThemeList(patient);
            this.themeList$.next(this.themeList);
        });
    }

    selectTheme(theme: Theme): void {
        this.selectedTheme$.next(theme);
        console.log("Theme selected : ", theme.title);
    }
}
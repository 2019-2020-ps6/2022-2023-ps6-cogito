import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Patient } from "../models/patient.model";
import { Theme } from "../models/theme.model";
import { PatientService } from "./patient.service";
import { serverUrl, httpOptionsBase } from "../configs/server.config";
import { Quiz } from "src/models/quiz.model";
import {ThemeService as adminThemeService} from "./theme.service";

@Injectable({
    providedIn: "root"
})
export class ThemeService {
    public themeList$: BehaviorSubject<Theme[]> = new BehaviorSubject<Theme[]>([]);
    private selectedPatient?: Patient;
    public selectedTheme$: BehaviorSubject<Theme | undefined> = new BehaviorSubject<Theme | undefined>(undefined);
    private baseURL: string = serverUrl + "/themes/";

    constructor(private patientService: PatientService, private router: Router, private http: HttpClient ) {

        this.patientService.selectedPatient$.subscribe((patient: Patient | undefined): void => {
            if (this.router.url.includes("/theme-page") && patient === undefined) {
                this.router.navigateByUrl("/patient-page");
            }
            this.selectedPatient = patient;
        });
    }

    selectTheme(theme: Theme): void {
        this.selectedTheme$.next(theme);
        console.log("Theme selected : ", theme.title);
    }

    retrieveAllThemes(): void {
        this.http.get<Theme[]>(this.baseURL).subscribe(themes => {
            themes.sort((a, b) => a.title.localeCompare(b.title));
            this.themeList$.next(themes);
        });
    }

    retrieveQuizOfTheme(themeId: number): Quiz[]{
        const themeList = this.themeList$.getValue();
        const theme = themeList.find(theme => theme.id === themeId);
        console.log(theme);
        return theme?.quizzesList as Quiz[];
    }

    retrievePThemes(patient: Patient): void {
        this.http.get<Theme[]>(this.baseURL + "patient/" + patient.id).subscribe(themes => {
            themes.sort((a, b) => a.title.localeCompare(b.title));
            this.themeList$.next(themes);
        });
    }
}

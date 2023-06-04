import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";


import { THEME_LIST } from "../mocks/theme.mock";
import { Patient } from "../models/patient.model";
import { Theme } from "../models/theme.model";
import { PatientService } from "./patient.service";
import { serverUrl, httpOptionsBase } from "../configs/server.config";


@Injectable({
    providedIn: "root"
})
export class ThemeService {
    public themeList$: BehaviorSubject<Theme[]> = new BehaviorSubject<Theme[]>([]);
    private selectedPatient?: Patient;
    public selectedTheme$: BehaviorSubject<Theme | undefined> = new BehaviorSubject<Theme | undefined>(undefined);
    private baseURL: string = serverUrl + "/themes/patient/";

    constructor(private patientService: PatientService, private router: Router, private http: HttpClient) {
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

    retrievePThemes(patient: Patient): void {
        this.http.get<Theme[]>(this.baseURL + patient.id).subscribe(themes => {
            themes.sort((a, b) => a.title.localeCompare(b.title));
            this.themeList$.next(themes);
        });
    }

    retrievePatientThemes(patient: Patient): BehaviorSubject<Theme[]> {
        this.retrievePThemes(patient);
        return this.themeList$;
    }
}

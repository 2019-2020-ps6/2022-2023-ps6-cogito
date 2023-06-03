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
    private themeList: Theme[] = [];
    public themeList$: BehaviorSubject<Theme[]> = new BehaviorSubject<Theme[]>([]);
    private selectedPatient?: Patient;
    public selectedTheme$: BehaviorSubject<Theme | undefined> = new BehaviorSubject<Theme | undefined>(undefined);

    constructor(private patientService: PatientService, private router: Router,private http: HttpClient) {
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

    retrievePatientThemes(patient:Patient): BehaviorSubject<Theme[]> {
        const urlWithId = serverUrl + "/themes/patient/" + patient.id.toString();
        this.http.get<Theme[]>(urlWithId).subscribe(themes => {
            themes.sort((a, b) => a.title.localeCompare(b.title));
            this.themeList = themes;
            this.themeList$.next(themes);
            console.log("Themes retrieved : ", themes);
        });
        return this.themeList$;
    }
}
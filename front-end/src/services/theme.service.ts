import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, map, Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Patient } from "../models/patient.model";
import { Theme } from "../models/theme.model";
import { PatientService } from "./patient.service";
import { Quiz } from "src/models/quiz.model";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root"
})
export class ThemeService {
    public themeList$: BehaviorSubject<Theme[]> = new BehaviorSubject<Theme[]>([]);
    private selectedPatient?: Patient;
    public selectedTheme$: BehaviorSubject<Theme | undefined> = new BehaviorSubject<Theme | undefined>(undefined);
    private baseURL: string = environment.apiUrl + "/themes/";

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
    }

    retrieveAllThemes(): void {
        this.http.get<Theme[]>(this.baseURL).subscribe(themes => {
            themes.sort((a, b) => a.title.localeCompare(b.title));
            this.themeList$.next(themes);
        });
    }

    retrieveQuizOfTheme(themeId: number): Observable<Quiz[]> {
        return this.http.get<Quiz[]>(environment.apiUrl+'/quizzes/theme/' + themeId).pipe(
          map((quizzes) => {
            return quizzes;
          })
        );
      }

    retrievePThemes(patient: Patient): void {
        this.http.get<Theme[]>(environment.apiUrl + "/patients/" + patient.id).subscribe(themes => {
            themes.sort((a, b) => a.title.localeCompare(b.title));
            this.themeList$.next(themes);
        });
    }
}

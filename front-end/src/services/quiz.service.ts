import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";

import { QUIZZES_ALL } from "../mocks/quiz.mock";
import { Patient } from "../models/patient.model";
import { Quiz } from "../models/quiz.model";
import { Theme } from "../models/theme.model";
import { PatientService } from "./patient.service";
import { ThemeService } from "./theme.service";

@Injectable({
    providedIn: "root"
})
export class QuizService {
    private quizList: Quiz[] = [];
    public quizList$: BehaviorSubject<Quiz[]> = new BehaviorSubject<Quiz[]>([]);
    private selectedPatient?: Patient;
    private selectedTheme?: Theme;
    public selectedQuiz$: BehaviorSubject<Quiz | undefined> = new BehaviorSubject<Quiz | undefined>(undefined);

    constructor(private patientService: PatientService, private themeService: ThemeService, private router: Router) {
        this.patientService.selectedPatient$.subscribe((patient?: Patient): void => {
            if (this.router.url.includes("/quiz-page") && patient === undefined) {
                this.router.navigateByUrl("/patient-page");
            }

            this.selectedPatient = patient;
        });

        this.themeService.selectedTheme$.subscribe((theme?: Theme): void => {
            this.selectedTheme = theme;

            this.themeService.retrieveQuizOfTheme(this.selectedTheme?.id as number).subscribe((quizzes) => {
                this.quizList$.next(quizzes);
            })
        });
    }

    selectQuiz(quiz: Quiz): void {
        this.selectedQuiz$.next(quiz);
    }


    leaveQuiz(): void {
        if (this.selectedPatient === undefined || this.selectedPatient.stage >= 4) {
            this.router.navigateByUrl("/patient-page");
        }
        else {
            this.router.navigateByUrl("/theme-page");
        }
    }

}
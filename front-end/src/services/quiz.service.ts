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

            console.log(this.selectedPatient);
            /*function patientQuizList(patient: Patient): Quiz[] {
                let quizList: Quiz[] = [];

                for (let quizId of patient.quizIdList) {
                    let index: number = QUIZZES_ALL.findIndex((quiz: Quiz): boolean => quiz.id === quizId);
                    if (index !== -1) {
                        quizList.push(QUIZZES_ALL[index]);
                    }
                }

                quizList.sort((a, b): number => a.title.localeCompare(b.title));
                return quizList;
            }

            this.quizList = (this.selectedPatient == undefined || this.selectedPatient.stage !== 4)
                            ? [] : patientQuizList(this.selectedPatient);
            this.quizList$.next(this.quizList);
            */
        });

        this.themeService.selectedTheme$.subscribe((theme?: Theme): void => {
            console.log("this.themeservice selected theme")
            this.selectedTheme = theme;
            const quizL = this.themeService.retrieveQuizOfTheme(this.selectedTheme?.id as number);
            this.quizList$.next(quizL);
            console.log(quizL);

            /*this.selectedTheme = theme;

            function patientQuizList(patient: Patient, theme: Theme): Quiz[] {
                let quizList: Quiz[] = [];
                let themeQuizzes: Quiz[] = theme.quizzesList;

                for (let quizId of patient.quizIdList) {
                    let index: number = themeQuizzes.findIndex((quiz: Quiz): boolean => quiz.id === quizId);
                    if (index != -1) {
                        quizList.push(themeQuizzes[index]);
                    }
                }

                quizList.sort((a, b) => a.title.localeCompare(b.title));
                return quizList;
            }

            if (this.selectedPatient === undefined) {
                this.quizList = [];
            } else if (this.selectedTheme != undefined) {
                this.quizList = patientQuizList(this.selectedPatient, this.selectedTheme);
            }
            this.quizList$.next(this.quizList);*/
        });
    }

    selectQuiz(quiz: Quiz): void {
        this.selectedQuiz$.next(quiz);
        console.log("Quiz selected : ", quiz.title);
    }


    leaveQuiz(): void {
        if (this.selectedPatient === undefined || this.selectedPatient.stage >= 4) {
            this.router.navigateByUrl("/patient-page");
        }
        else {
            this.router.navigateByUrl("/theme-page");
        }
    }

    // par rapport à quizzesALL
    getQuizById(id: number): Quiz | undefined {
        let index: number = QUIZZES_ALL.findIndex((quiz: Quiz): boolean => quiz.id === id);
        return (index === -1) ? undefined : QUIZZES_ALL[index];
    }

}
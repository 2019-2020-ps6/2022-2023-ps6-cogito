import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

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
    public selectedQuiz$: Subject<Quiz> = new Subject<Quiz>();

    constructor(private patientService: PatientService, private themeService: ThemeService) {
        this.patientService.selectedPatient$.subscribe((patient?: Patient): void => {
            this.selectedPatient = patient;
        });

        this.themeService.selectedTheme$.subscribe((theme?: Theme): void => {
            this.selectedTheme = theme;

            function patientQuizList(patient: Patient, theme: Theme): Quiz[] {
                let quizList: Quiz[] = [];
                let themeQuizzes: Quiz[] = theme.quizList;

                for (let quizId of patient.quizIdList) {
                    let index: number = themeQuizzes.findIndex((quiz: Quiz): boolean => quiz.id === quizId);
                    if (index != -1) {
                        quizList.push(themeQuizzes[index]);
                    }
                }

                quizList.sort((a, b) => a.title.localeCompare(b.title));
                return quizList;
            }

            this.quizList = (this.selectedPatient == undefined || theme == undefined)
                            ? [] : patientQuizList(this.selectedPatient, theme);
            console.log(this.quizList);
            this.quizList$.next(this.quizList);
        });
    }
}
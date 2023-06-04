import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { PATIENT_ANDREA } from "src/mocks/patient.mock";
import { QUIZZES_ALL } from "src/mocks/quiz.mock";
import { STAT_GOOD_3 } from "../../../mocks/statistics.mock";
import { Patient } from "../../../models/patient.model";
import { Quiz } from "../../../models/quiz.model";
import { Statistics } from "../../../models/statistics.model";
import { PatientService } from "../../../services/patient.service";


@Component({
    selector: "app-results",
    templateUrl: "./results.component.html",
    styleUrls: ["./results.component.scss"]
})
export class ResultsComponent implements OnInit {
    patient: Patient;
    stats: Statistics;
    quizList: Quiz[] = [];

    constructor(private cdr: ChangeDetectorRef, private patientService: PatientService) {
        this.patient = PATIENT_ANDREA;
        this.stats = STAT_GOOD_3;

        this.patientService.selectedPatient$.subscribe((patient?: Patient): void => {
            if (patient !== undefined) {
                this.patient = patient;
                this.stats = STAT_GOOD_3;
            }
        });

        this.initQuizzes();
    }

    ngOnInit(): void { }

    initQuizzes() {
        this.quizList = [];
        for (let quiz of QUIZZES_ALL) {
            if (this.stats.playedQuizList.has(quiz.id)) {
                this.quizList.push(quiz);
            }
        }
    }

    deleteQuiz(quizId: number) {
        let index = this.patient.quizIdList.findIndex(value => value === quizId);
        if (index !== -1) {
            this.patient.quizIdList.splice(index, 1);
        }
        this.initQuizzes();
        this.cdr.detectChanges();
    }
}

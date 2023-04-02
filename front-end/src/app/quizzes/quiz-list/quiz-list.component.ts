import { Component, OnInit } from "@angular/core";

import { QuizService } from "../../../services/quiz.service";
import { Quiz } from "../../../models/quiz.model";

@Component({
    selector: "app-quizzes-quiz-list",
    templateUrl: "./quiz-list.component.html",
    styleUrls: ["./quiz-list.component.scss"]
})
export class QuizListComponent implements OnInit {
    public quizList: Quiz[] = [];
    public start = true;
    public end = false;


    constructor(public quizService: QuizService) {
        this.quizService.quizzes$.subscribe((quizList) => {
            this.quizList = quizList;
        });
        this.quizService.start$.subscribe((start) => {
            this.start = start;
        });
        this.quizService.end$.subscribe((end) => {
            this.end = end;
        });
    }

    ngOnInit() {
        this.sortQuizList();
        this.quizList = this.quizList.slice(0, 6);
    }

    getThe6() {
        this.quizService.getThe6();
    }

    showNextQuizzes() {
        this.quizService.showNextQuizzes();
    }

    showPreviousQuizzes() {
        this.quizService.showPreviousQuizzes();
    }

    sortQuizList() {
        this.quizService.sortQuizList();
    }

    quizSelected(selected: boolean) {
        console.log("event received from child:", selected);
    }

}

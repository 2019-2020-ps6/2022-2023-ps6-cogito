import { Component, OnInit } from "@angular/core";

import { AdminQuizService } from "src/services/admin-quiz.service";
import { Quiz } from "src/models/quiz.model";

@Component({
    selector: "app-quizzes-admin-quiz-list",
    templateUrl: "./admin-quiz-list.component.html",
    styleUrls: ["./admin-quiz-list.component.scss"]
})
export class AdminQuizListComponent implements OnInit {
    public quizList: Quiz[] = [];


    constructor(public quizService: AdminQuizService) {
        this.quizService.quizzes$.subscribe((quizList: Quiz[]): void => {
            this.quizList = quizList;
        });
    }


    ngOnInit(): void {
    }

    quizSelected(selected: boolean): void {
        console.log("event received from child:", selected);
    }

    deleteQuiz(quiz: Quiz): void {
        this.quizService.deleteQuiz(quiz);
        console.log("The quiz ", quiz.title, " has been deleted");
    }
}
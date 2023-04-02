import { Component, OnInit } from "@angular/core";
import { AdminQuizService } from "../../../services/admin-quiz.service";
import { Quiz } from "../../../models/quiz.model";

@Component({
    selector: "app-quizzes-quiz-list",
    templateUrl: "./quiz-list.component.html",
    styleUrls: ["./quiz-list.component.scss"]
})
export class QuizListComponent implements OnInit {

    public quizList: Quiz[] = [];

    constructor(public quizService: AdminQuizService) {
        this.quizService.quizzes$.subscribe((quizList) => {
            this.quizList = quizList;
        });
    }

    ngOnInit() { }

    quizSelected(selected: boolean) {
        console.log("event received from child:", selected);
    }

    deleteQuiz(quiz: Quiz) {
        this.quizService.deleteQuiz(quiz);
        console.log("The quiz ", quiz.title, " has been deleted");
    }
}
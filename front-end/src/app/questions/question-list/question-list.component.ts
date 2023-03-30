import { Component, OnInit, Input } from "@angular/core";

import { Quiz } from "src/models/quiz.model";
import { AdminQuizService } from "src/services/admin-quiz.service";
import { QuizQuestion } from "src/models/quizQuestion.model";

@Component({
    selector: "app-questions-question-list",
    templateUrl: "./question-list.component.html",
    styleUrls: ["./question-list.component.scss"]
})
export class QuestionListComponent implements OnInit {

    @Input()
    quiz: Quiz | undefined;


    constructor(private quizService: AdminQuizService) { }


    ngOnInit(): void { }

    addQuestion(question: QuizQuestion): void {
        if (this.quiz != undefined) {
            this.quizService.addQuestion(this.quiz, question);
        }
    }

    deleteQuestion(question: QuizQuestion): void {
        if (this.quiz != undefined) {
            this.quizService.deleteQuestion(this.quiz, question);
        }
    }
}

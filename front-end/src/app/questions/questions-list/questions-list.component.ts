import { Component, OnInit } from "@angular/core";

import { Quiz } from "src/models/quiz.model";
import { Question } from "src/models/question.model";
import { QuizService } from "src/services/adminQuiz.service";

@Component({
    selector: "app-questions-list",
    templateUrl: "./questions-list.component.html",
    styleUrls: ["./questions-list.component.scss"]
})
export class QuestionsListComponent implements OnInit {
    public quiz?: Quiz;

    constructor(private quizService: QuizService) {}

    ngOnInit(): void {
        this.quizService.getSelectedQuiz().subscribe(quiz => {
            this.quiz = quiz;
        });
    }

    editQuestion(question: Question): void {
        this.quizService.selectQuestion(question);
    }

    removeQuestion(question: Question): void {
        this.quizService.removeQuestion(question);
    }

    createNewQuestion(): void {
        this.quizService.createAndSelectNewQuestion();
    }
}

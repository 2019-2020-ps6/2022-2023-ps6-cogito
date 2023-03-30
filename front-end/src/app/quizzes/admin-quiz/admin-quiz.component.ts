import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { Quiz } from "src/models/quiz.model";

@Component({
    selector: "app-quizzes-admin-quiz",
    templateUrl: "./admin-quiz.component.html",
    styleUrls: ["./admin-quiz.component.scss"]
})
export class AdminQuizComponent implements OnInit {
    @Input()
    quiz: Quiz | undefined;

    @Output()
    quizSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Output()
    quizDeleted: EventEmitter<Quiz> = new EventEmitter<Quiz>();

    @Output()
    quizEdited: EventEmitter<Quiz> = new EventEmitter<Quiz>();


    constructor() {
    }


    ngOnInit(): void {
    }

    selectQuiz(): void {
        this.quizSelected.emit(true);
    }

    deleteQuiz(): void {
        console.log("this.deleteQuiz");
        this.quizDeleted.emit(this.quiz);
    }

    editQuiz(): void {
        console.log("this.editQuiz");
        this.quizEdited.emit(this.quiz);
    }
}

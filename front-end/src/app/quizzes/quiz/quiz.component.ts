import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { Quiz } from "../../../models/quiz.model";

@Component({
    selector: "app-quizzes-quiz",
    templateUrl: "./quiz.component.html",
    styleUrls: ["./quiz.component.scss"]
})
export class QuizComponent implements OnInit {
    @Input()
    quiz: Quiz | undefined;

    @Output()
    quizSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Output()
    quizDeleted: EventEmitter<Quiz> = new EventEmitter<Quiz>();

    @Output()
    quizEdited: EventEmitter<Quiz> = new EventEmitter<Quiz>();

    constructor() { }

    ngOnInit() { }

    selectQuiz() {
        this.quizSelected.emit(true);
    }

    deleteQuiz() {
        console.log("this.deleteQuiz");
        this.quizDeleted.emit(this.quiz);
    }

    editProfile() {
        console.log("this.editProfile");
        this.quizEdited.emit(this.quiz);
    }
}

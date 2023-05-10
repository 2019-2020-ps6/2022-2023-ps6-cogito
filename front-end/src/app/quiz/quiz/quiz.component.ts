import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { Quiz } from "src/models/quiz.model";

@Component({
    selector: "app-quiz-quiz",
    templateUrl: "./quiz.component.html",
    styleUrls: ["./quiz.component.scss"]
})
export class QuizComponent implements OnInit {
    @Input()
    quiz!: Quiz;

    @Output()
    selectedQuiz: EventEmitter<Quiz> = new EventEmitter<Quiz>();


    constructor() {}


    ngOnInit(): void {}

    selectQuiz(): void {
        this.selectedQuiz.emit(this.quiz);
    }
}

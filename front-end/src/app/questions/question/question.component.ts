import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { QuizQuestion } from "src/models/quizQuestion.model";

@Component({
    selector: "app-questions-question",
    templateUrl: "./question.component.html",
    styleUrls: ["./question.component.scss"]
})
export class QuestionComponent implements OnInit {

    @Input()
    question: QuizQuestion | undefined;

    @Output()
    deleteQuestion: EventEmitter<QuizQuestion> = new EventEmitter<QuizQuestion>();


    constructor() { }


    ngOnInit(): void { }

    delete(): void {
        this.deleteQuestion.emit(this.question);
    }
}

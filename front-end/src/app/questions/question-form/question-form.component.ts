import { Component, OnInit } from "@angular/core";

import { Question } from "src/models/question.model";
import { QuizService } from "src/services/adminQuiz.service";

@Component({
    selector: "app-question-form",
    templateUrl: "./question-form.component.html",
    styleUrls: ["./question-form.component.scss"]
})
export class QuestionFormComponent implements OnInit {
    question?: Question;
    originalQuestion?: Question;
    type: string = "creation";

    constructor(private quizService: QuizService) {}

    ngOnInit(): void {
        this.quizService.getSelectedQuestion().subscribe(question => {
            this.question = { ...question };
            if (Object.keys(this.question).length === 0) {
                this.type = "creation";
            }
            else {
                this.type = "edition";
                this.originalQuestion = { ...question };
            }
        });
    }

    addAnswerToForm(): void {
        this.question?.answerList.push({
            value: "",
            isCorrect: false,
            id: this.question?.answerList.length + 1
        });
    }

    saveQuestion(): void {
        if (this.type === "edition") {
            this.quizService.updateQuestion(this.question as Question);
        }
        this.quizService.selectQuestion(undefined);
    }

    cancelQuestion(): void {
        this.quizService.selectQuestion(undefined);
    }
}

import { Component, OnInit } from "@angular/core";
import { Answer } from "src/models/answer.model";

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
            this.question = JSON.parse(JSON.stringify(question)) ;
            if (Object.keys(this.question as Question).length === 0) {
                this.type = "creation";
            }
            else {
                this.type = "edition";
            }
        });
    }

    addAnswerToForm(): void {
        if(this.question?.answerList.length)
            console.log(this.question?.answerList.length + 1);
        this.question?.answerList.push({
            value: "",
            isCorrect: false,
            id: this.quizService.getIdOfNewAnswerOf(this.question as Question)
        });
    }

    saveQuestion(): void {
        if (this.type === "edition") {
            this.quizService.updateQuestion(this.question as Question);
        }
        this.quizService.selectQuestion(undefined);
    }

    cancelQuestion(): void {
        this.quizService.resetSelectedQuestion();
        console.log("cancelQuestion");
    }

    deleteAnswer(answer : Answer): void {
        this.question?.answerList.splice(this.question.answerList.indexOf(answer), 1);
    }
}

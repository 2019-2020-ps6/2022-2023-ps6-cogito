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

    constructor(private quizService: QuizService) {}

    ngOnInit(): void {
        this.quizService.getSelectedQuestion().subscribe(question => {
                this.question = JSON.parse(JSON.stringify(question)) ;
        });
    }

    addAnswerToForm(): void {
        this.question?.answerList.push({
            value: "",
            isCorrect: false,
            id: this.quizService.getIdOfNewAnswerOf(this.question as Question)
        });
    }

    saveQuestion(): void {
        if(!this.checkQuestionValidity()){
            console.log("Question is not valid");
        }
        else {
            this.quizService.updateQuestion(this.question as Question);
            this.quizService.selectQuestion(undefined);
        }
    }

    cancelQuestion(): void {
        this.quizService.resetSelectedQuestion();
        if(this.quizService.getTypeOfForm() === "creation"){
            this.quizService.removeQuestion(this.question as Question);
        }
        this.quizService.selectQuestion(undefined);
    }

    deleteAnswer(answer : Answer): void {
        this.question?.answerList.splice(this.question.answerList.indexOf(answer), 1);
    }


    checkQuestionValidity(): boolean {
        return this.question?.title !== undefined && this.question?.title !== "" && this.question?.answerList.length > 1 && this.question?.answerList.filter(answer => answer.isCorrect).length > 0 && this.question?.answerList.filter(answer => answer.value !== "").length === this.question?.answerList.length && this.question?.difficulty !== undefined && this.question?.defaultMediaType !== undefined;
    }
}

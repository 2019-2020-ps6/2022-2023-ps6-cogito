import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";

import { AdminQuizService } from "src/services/admin-quiz.service";
import { Quiz } from "src/models/quiz.model";
import { QuizQuestion } from "src/models/quizQuestion.model";

@Component({
    selector: "app-questions-question-form",
    templateUrl: "./question-form.component.html",
    styleUrls: ["./question-form.component.scss"]
})
export class QuestionFormComponent implements OnInit {

    @Input()
    quiz!: Quiz;

    public questionForm!: FormGroup;

    constructor(public formBuilder: FormBuilder, private quizService: AdminQuizService) {
        this.initializeQuestionForm();
    }

    private initializeQuestionForm(): void {
        this.questionForm = this.formBuilder.group({
            label: ["", Validators.required],
            answers: this.formBuilder.array([])
        });
    }


    ngOnInit(): void {
    }

    get answers(): FormArray {
        return this.questionForm.get("answers") as FormArray;
    }

    private createAnswer(): FormGroup {
        return this.formBuilder.group({
            value: "",
            isCorrect: false
        });
    }

    addAnswer(): void {
        this.answers.push(this.createAnswer());
    }

    addQuestion(): void {
        if (this.questionForm.valid) {
            const question: QuizQuestion = this.questionForm.getRawValue() as QuizQuestion;
            this.quizService.addQuestion(this.quiz, question);
            this.initializeQuestionForm();
        }
    }
}

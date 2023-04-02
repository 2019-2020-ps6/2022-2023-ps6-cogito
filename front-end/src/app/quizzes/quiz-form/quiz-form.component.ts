import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { AdminQuizService } from "src/services/admin-quiz.service";
import { Quiz } from "src/models/quiz.model";

@Component({
    selector: "app-quizzes-quiz-form",
    templateUrl: "./quiz-form.component.html",
    styleUrls: ["./quiz-form.component.scss"]
})
export class QuizFormComponent implements OnInit {

    public enumState = {
        GENERAL: "general",
        QUESTIONS: "questions"
    };

    public enumType = {
        CREATE: "create",
        UPDATE: "update"
    };

    @Input()
    public type: string | undefined;

    @Input()
    public updatableQuiz: Quiz | undefined;

    public quiz: Quiz | undefined;
    public state = this.enumState.GENERAL;
    public quizForm: FormGroup;


    constructor(public quizService: AdminQuizService, public formBuilder: FormBuilder) {
        this.quizForm = this.formBuilder.group({
            title: [""],
            picture: [""]
        });
    }


    ngOnInit() {
        if (this.type === undefined) {
            this.type = this.enumType.CREATE;
        }

        if (this.type === this.enumType.CREATE) {
            this.quizService.setSelected({} as Quiz);
        }

        if (this.type === this.enumType.UPDATE) {
            this.quiz = this.updatableQuiz;
            this.quizService.setSelected(this.updatableQuiz?.id);
            this.quizForm = this.formBuilder.group({
                title: [""],
                picture: [""]
            });
        }

        this.quizService.selectedQuiz$.subscribe((quiz: Quiz) => {
            this.quiz = quiz;
        });
    }

    addQuiz() {
        let questions = this.quiz?.quizQuestionList || [];
        let id = this.quiz?.id || -1;
        this.quiz = this.quizForm.getRawValue() as Quiz;
        this.quiz.quizQuestionList = questions;
        this.quiz.id = id;
        if (this.quiz) {
            if (this.type === this.enumType.CREATE) {
                this.quizService.addQuiz(this.quiz);
            }
            if (this.type === this.enumType.UPDATE) {
                this.quizService.updateQuiz(this.quiz);
            }
        }
    }

    changeState(state: string) {
        if (this.state === this.enumState.GENERAL) {
            let questions = this.quiz?.quizQuestionList || [];
            let id = this.quiz?.id || -1;

            this.quiz = this.quizForm.getRawValue() as Quiz;
            this.quiz.quizQuestionList = questions;
            this.quiz.id = id;
            this.quizService.setSelected(this.quiz.id);
        }
        this.quiz = this.quizService.selectedQuiz$.value;
        console.log(this.quiz);
        this.state = state;
    }
}

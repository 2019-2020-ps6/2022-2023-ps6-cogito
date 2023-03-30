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
    @Input()
    public updatableQuiz: Quiz | undefined;

    public quizForm: FormGroup;


    constructor(public formBuilder: FormBuilder, public quizService: AdminQuizService) {
        // Form creation
        this.quizForm = this.formBuilder.group({
            title: [""],
            picture: [""]
        });
    }


    ngOnInit(): void {
        console.log("updatableQuiz", this.updatableQuiz);
    }

    addQuiz(): void {
        // We retrieve here the quiz object from the quizForm and we cast the type "as Quiz".
        const quizToCreate: Quiz = this.quizForm.getRawValue() as Quiz;

        // Now, we add the quiz in the list
        if (this.updatableQuiz === undefined) {
            this.quizService.addQuiz(quizToCreate);
        }
        else {
            this.updatableQuiz.title = quizToCreate.title;
            this.updatableQuiz.picture = quizToCreate.picture;
            console.log("update quiz");
            this.quizService.updateQuiz(this.updatableQuiz);
        }
    }
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Quiz } from "src/models/quiz.model";
import { AdminQuizService } from "src/services/admin-quiz.service";

@Component({
    selector: "app-quizzes-edit-quiz",
    templateUrl: "./edit-quiz.component.html",
    styleUrls: ["./edit-quiz.component.scss"]
})
export class EditQuizComponent implements OnInit {
    public quiz: Quiz | undefined;


    constructor(private route: ActivatedRoute, private quizService: AdminQuizService) {
        this.quizService.selectedQuiz$.subscribe((quiz: Quiz) => this.quiz = quiz);
    }


    ngOnInit(): void {
        const id: string | null = this.route.snapshot.paramMap.get("id");
        if (id != null) {
            this.quizService.setSelected(parseInt(id));
        }
    }

    updateQuiz(quiz: Quiz): void {
        console.log("Update quiz");
        this.quizService.updateQuiz(quiz);
    }
}

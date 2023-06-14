import { Component, OnInit } from "@angular/core";

import { Quiz } from "src/models/quiz.model";
import { Question } from "src/models/question.model";
import { QuizService } from "src/services/adminQuiz.service";
import {ThemeService} from "src/services/adminTheme.service";
import { Theme } from "src/models/theme.model";

@Component({
    selector: "app-questions-list",
    templateUrl: "./questions-list.component.html",
    styleUrls: ["./questions-list.component.scss"]
})
export class QuestionsListComponent implements OnInit {
    public quiz?: Quiz;
    public theme?: Theme;
    public questions?: Question[] = [];

    constructor(private quizService: QuizService, private themeService: ThemeService) {}

        ngOnInit(): void {
        this.quizService.getSelectedQuiz().subscribe(quiz => {
          this.quiz = quiz;
          this.quizService.getAllQuestionsOfAQuiz(this.quiz).subscribe(questions => {
            this.questions = questions;
          });
        });

        this.themeService.getSelectedTheme().subscribe(theme => {
          this.theme = theme;
        })
      }


    editQuestion(question: Question): void {
        this.quizService.selectQuestion(question);
    }

    removeQuestion(question: Question): void {
        this.quizService.removeQuestion(question);
    }

    createNewQuestion(): void {
        this.quizService.createAndSelectNewQuestion(this.theme?.id as number);
    }
}

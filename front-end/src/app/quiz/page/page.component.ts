import { Theme } from './../../../models/theme.model';
import { Component, HostListener, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Quiz } from "src/models/quiz.model";
import { QuizService } from "src/services/quiz.service";
import { ThemeService} from "src/services/theme.service"

@Component({
    selector: "app-quiz-page",
    templateUrl: "./page.component.html",
    styleUrls: ["./page.component.scss"]
})
export class QuizPageComponent implements OnInit {
    private quizList!: Quiz[];
    public displayQuizList: Quiz[];
    private startDisplayInd: number = -1;
    private nbDisplayQuizzes: number = 0;
    private margin!: number;
    private size!: number;

    constructor(private quizService: QuizService, private router: Router, private themeService : ThemeService) {
        const themeId = window.location.href.split('/')[4];
        console.log(themeId);
        if(themeId){
            this.themeService.retrieveQuizOfTheme(parseInt(themeId)).subscribe((quizzes) => {
                this.quizList = quizzes;
                this.displayQuizList = this.quizList;
            });
        }
        else{
            this.quizService.setQuizzesListStade4().subscribe((quizzes) => {
                this.quizList = quizzes;
                this.displayQuizList = this.quizList;
            })
        }
        this.maxMargin();
        this.currentSize();
        this.nbDisplayQuizzes = this.numberRowQuizzes() * this.numberColQuizzes();
        this.displayQuizList = [];
    }

    maxMargin(): void {
        this.margin = Math.max(window.innerWidth * 0.04, window.innerHeight * 0.04, 20);
    }

    currentSize(): void {
        let minSize: number = 130 + this.margin;
        this.size = Math.max(minSize, Math.floor(Math
            .min(window.innerWidth * 0.20 + this.margin, window.innerHeight * 0.20 + this.margin)));
    }

    numberRowQuizzes(): number {
        if (window.innerWidth < 700) {
            return 1;
        }
        return Math.max(1, Math.floor((window.innerWidth * 0.6) / this.size));
    }

    numberColQuizzes(): number {
        if (window.innerWidth < 700) {
            return 1;
        }
        return Math.max(1, Math.floor((window.innerHeight * (0.65*0.9)) / (this.size + 32)));
    }

    ngOnInit(): void {
        this.nextDisplayQuizzes();
        this.onWindowResize();
    }

    @HostListener("window:resize")
    onWindowResize(): void {
        this.maxMargin();
        this.currentSize();
        this.startDisplayInd = -1;
        this.nbDisplayQuizzes = this.numberRowQuizzes() * this.numberColQuizzes();
        this.nextDisplayQuizzes();
    }

    hasNextOrPrevButtons(): boolean {
        return this.nbDisplayQuizzes < this.quizList.length;
    }

    nextDisplayQuizzes(): void {
        if (this.startDisplayInd == -1 || (this.startDisplayInd + this.nbDisplayQuizzes > this.quizList.length)) {
            this.startDisplayInd = 0;
        }
        else {
            this.startDisplayInd += this.nbDisplayQuizzes;
        }
        this.displayQuizList = this.quizList
                                   .slice(this.startDisplayInd, this.startDisplayInd + this.nbDisplayQuizzes);
    }

    prevDisplayQuizzes(): void {
        let tabLenght: number = this.quizList.length;
        let remLenght: number;
        if (this.startDisplayInd <= 0) {
            remLenght = tabLenght % this.nbDisplayQuizzes;
            this.startDisplayInd = tabLenght - ((remLenght == 0) ? this.nbDisplayQuizzes : remLenght);
        }
        else {
            remLenght = this.nbDisplayQuizzes;
            this.startDisplayInd -= remLenght;
        }
        this.displayQuizList = this.quizList
                                   .slice(this.startDisplayInd, this.startDisplayInd + remLenght);
    }

    selectQuiz(quiz: Quiz): void {
        this.quizService.selectQuiz(quiz);
        this.router.navigateByUrl("/game-page");
    }

    leavePage(): void {
        this.quizService.leaveQuiz();
    }
}

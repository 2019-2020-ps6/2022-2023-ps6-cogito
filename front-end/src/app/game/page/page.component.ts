import { Component, OnInit } from '@angular/core';
import { Question } from 'src/models/question.modele';
import { GameService } from 'src/services/game.service';

@Component({
    selector: 'app-game-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class GamePageComponent implements OnInit {
    public quizTheme: string = "Instruments";
    public questions: Question[] = [];
    public currentQuestion: number = 0;
    public selectedQuestion!: Question;
    public numberQuestions: number;


    constructor(public gameService: GameService) {
        this.gameService.questions$.subscribe((questions: Question[]) => {
            this.questions = questions;
        })
        this.numberQuestions = this.questions.length;
        this.nextQuestion();
    }

    ngOnInit(): void { }

    nextQuestion() {
        this.selectedQuestion = this.questions[this.currentQuestion];
        this.gameService.selectQuestion(this.selectedQuestion);
        this.currentQuestion++;
    }
}
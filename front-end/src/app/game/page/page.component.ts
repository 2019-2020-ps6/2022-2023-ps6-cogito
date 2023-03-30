import { Component, OnInit } from '@angular/core';
import { GameInstance } from 'src/models/gameInstance.model';
import { GameQuestion } from 'src/models/gameQuestion.model';
import { GameService } from 'src/services/game.service';

@Component({
    selector: 'app-game-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class GamePageComponent implements OnInit {
    public quizName: string = "";
    public questions: GameQuestion[] = [];
    public currentQuestion: number = 1;
    public numberQuestions: number;


    constructor(public gameService: GameService) {
        this.gameService.gameInstance$.subscribe((gameInstance: GameInstance) => {
            this.quizName = gameInstance.quizTitle;
            this.questions = gameInstance.gameQuestionList;
        });
        this.numberQuestions = this.questions.length;
    }


    ngOnInit(): void { }

    nextQuestion() {
        this.gameService.selectQuestion(this.questions[this.currentQuestion]);
        this.currentQuestion++;
    }
}
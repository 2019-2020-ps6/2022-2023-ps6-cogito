import { Component, OnInit } from '@angular/core';
import { GameInstance } from 'src/models/gameInstance.modele';
import { GameQuestion } from 'src/models/gameQuestion.modele';
import { GameService } from 'src/services/game.service';

@Component({
    selector: 'app-game-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class GamePageComponent implements OnInit {
    public quizName: string = "";
    public questions: GameQuestion[] = [];
    public currentQuestion: number = 0;
    public selectedQuestion!: GameQuestion;
    public numberQuestions: number;


    constructor(public gameService: GameService) {
        this.gameService.gameInstance$.subscribe((gameInstance: GameInstance) => {
            this.quizName = gameInstance.quizId;
            this.questions = gameInstance.gameQuestionList;
        });
        this.numberQuestions = this.questions.length;
        this.nextQuestion();
    }


    ngOnInit(): void { }

    nextQuestion() {
        this.selectedQuestion = this.questions[this.currentQuestion];
        this.gameService.selectQuestion(this.selectedQuestion);
        this.currentQuestion++;
        console.log("Selected question");
    }
}
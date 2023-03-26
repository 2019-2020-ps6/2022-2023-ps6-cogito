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
    public currentQuestion: number = 1;
    public numberQuestions: number;
    public questionChanged: boolean = false;


    constructor(public gameService: GameService) {
        this.gameService.gameInstance$.subscribe((gameInstance: GameInstance) => {
            this.quizName = gameInstance.quizId;
            this.questions = gameInstance.gameQuestionList;
        });
        this.numberQuestions = this.questions.length;
        this.currentQuestion=this.gameService.currentQuestionIndex+1;
        console.log(this.gameService.currentQuestionIndex);
    }


    ngOnInit(): void { }

    nextQuestion() {
        if (this.currentQuestion<this.numberQuestions){
            this.gameService.selectQuestion(this.questions[this.currentQuestion]);
        this.currentQuestion++;
        console.log("Skip question");
        }
    }

    onAnswerQuestion(isAnwsered: boolean) {
        if (this.currentQuestion<this.numberQuestions){
        this.currentQuestion++;
        this.questionChanged=isAnwsered;
        this.questionChanged=false;
      }
    }
}
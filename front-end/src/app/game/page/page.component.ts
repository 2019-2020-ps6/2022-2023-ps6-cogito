import { Component, Input, OnInit } from '@angular/core';
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
    public currentQuestion: number = 0;
    public numberQuestions: number;
    public questionChanged: boolean = false;
    public gameFinished: boolean = false;
    public resultDisplayed: boolean = false;
    public nextquestion: boolean = false;
    public clickanswer: boolean =false;
    
    public currAnswer: boolean = false;

    constructor(public gameService: GameService) {
        this.gameService.gameInstance$.subscribe((gameInstance: GameInstance) => {
            this.quizName = gameInstance.quizId;
            this.questions = gameInstance.gameQuestionList;
        });
        this.numberQuestions = this.questions.length;
        this.currentQuestion=this.gameService.currentQuestionIndex+1;
    }

    stateAnswer(stateAnswered : boolean){
        this.currAnswer=stateAnswered;
    }


    ngOnInit(): void { }

    nextQuestion() {
        if (!this.resultDisplayed){
            this.resultDisplayed=true;
            this.nextquestion=true;
            this.currAnswer=false;
        }
        else {
            if (this.currentQuestion<this.numberQuestions){
                this.gameService.selectQuestion(this.questions[this.currentQuestion]);
                this.currentQuestion++;
                this.nextquestion=false;
            }
        }
    }

    onAnswerQuestion(isAnwsered: boolean) {
        if (!this.resultDisplayed){
            this.resultDisplayed=true;
            this.clickanswer=true;
        }
        else {
            if (this.currentQuestion<this.numberQuestions){
                this.questionChanged=isAnwsered;
                this.questionChanged=false;
                this.clickanswer=false;
                this.currentQuestion++;
                this.gameService.currentQuestionIndex++;
            }
            else{
                this.endGame();
            }

        }

    }

    endGame(){
        if (!this.clickanswer){
            this.currAnswer=false;
        }
        this.gameFinished=true;
        this.resultDisplayed=true;
        console.log(this.gameService.answers);
    }

    onClickQuit(clickOnQuitt: boolean){
        this.gameFinished=false;
        this.gameService.reinitQuiz();
        this.numberQuestions = this.questions.length;
        this.currentQuestion=this.gameService.currentQuestionIndex+1;
    }

    onClickContinue(clickOnQuitt: boolean){
        if (this.nextquestion){
            this.nextQuestion();
        }
        else if (this.clickanswer){
            this.onAnswerQuestion(true);
        }
        this.resultDisplayed=false;
    }
}
import { Component, OnInit } from "@angular/core";

import { GameInstance } from "src/models/gameInstance.model";
import { GameQuestion } from "src/models/gameQuestion.model";
import { GameService } from "src/services/game.service";

@Component({
    selector: "app-game-page",
    templateUrl: "./page.component.html",
    styleUrls: ["./page.component.scss"]
})
export class GamePageComponent implements OnInit {
    public quizId!: number;
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
        this.gameService.gameInstance$.subscribe((gameInstance: GameInstance): void => {
            this.quizId = gameInstance.quizId;
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
                this.gameService.wrongAnswers(this.currentQuestion);
                this.numberQuestions = this.questions.length;
                this.currentQuestion++;
                this.nextquestion=false;
            }
        }
    }

    onAnswerQuestion(isAnwsered: boolean) {
        this.numberQuestions = this.questions.length;
        if (!this.resultDisplayed){
            this.resultDisplayed=true;
            this.clickanswer=true;
        }
        else {
            this.gameService.wrongAnswers(this.currentQuestion);
            if (this.currentQuestion<this.numberQuestions){
                this.questionChanged=isAnwsered;
                this.questionChanged=false;
                this.clickanswer=false;
                this.numberQuestions = this.questions.length;
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
        this.gameService.stopSound();
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
        this.gameService.stopSound();
        if (this.questions[this.currentQuestion-1].sound){
            this.gameService.playSound(this.questions[this.currentQuestion-1].sound);
        }
        if (this.gameFinished){
            this.gameService.stopSound();
        }
        this.resultDisplayed=false;
    }
}
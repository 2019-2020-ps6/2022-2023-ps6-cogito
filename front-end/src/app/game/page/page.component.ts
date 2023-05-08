import { Component } from "@angular/core";

import { GameQuestion } from "src/models/gameQuestion.model";
import { idList } from "src/services/game.service";
import { Answer } from "../../../models/answer.model";

@Component({
    selector: "app-game-page",
    templateUrl: "./page.component.html",
    styleUrls: ["./page.component.scss"]
})
export class GamePageComponent {
    public question?: GameQuestion;
    public lastQuestion: boolean = false;
    imageUrl:string="./assets/pictures/audio-on.png";
    public corrDisplayed: boolean = false;
    public lastAnswer: boolean = false;
    public result: boolean = false;
    constructor(private gameService: idList) {
        this.gameService.currentQuestion$.subscribe((question?: GameQuestion): void => {
            this.question = question;
            // console.log("Before last question: ", this.lastQuestion);
            this.lastQuestion = this.gameService.islastQuestion();
            // console.log("After last question: ", this.lastQuestion);
            if (this.question)
            this.gameService.playSound(this.question.sound);
        });
    }

    skipQuestion(): void {
        this.gameService.checkAnswer(undefined,this.question);
        if (this.gameService.activeCorrWindow())
        this.corrAnswerWindow(this.question);
        else
        this.nextQuestion();
    }

    nextQuestion(): void {
        if (this.gameService.islastQuestion()){
            this.corrAnswerWindow(this.question);
            //this.finishGame();
        }
        else {
            this.gameService.stopSound();
            this.gameService.nextQuestion();
            if (this.question)
            this.gameService.playSound(this.question.sound);
        }
    }

    finishGame(): void {
        this.lastQuestion = false;
        this.gameService.stopSound();
        console.log(this.gameService.finalScore());
        this.gameService.finishGame();
    }

    leavePage(): void {
        this.gameService.leaveGame();
    }

    checkAnswer(answer: Answer): void{
        this.gameService.checkAnswer(answer,this.question);
        if (this.gameService.activeCorrWindow())
        this.corrAnswerWindow(this.question);
        else
        this.nextQuestion();

    }

    clickSpeaker(): void {
        if (this.imageUrl=="./assets/pictures/audio-on.png")
        this.setAudioOff();
        else {
            this.setAudioOn()
        }

    }

    setAudioOn(): void {
        if (this.question){
            this.gameService.playSound(this.question.sound);
            this.imageUrl="./assets/pictures/audio-on.png"
        }
    }
    
    setAudioOff(): void {
        this.gameService.stopSound();
        this.imageUrl="./assets/pictures/audio-off.png";
    }

    corrAnswerWindow(question?:GameQuestion): void {
        if (question){
            if (this.gameService.activeCorrWindow()&& question.correcting){
                this.lastAnswer=this.gameService.finalScore().get(question)||false;
                if ((this.gameService.activeCorrTrueWindow() && this.lastAnswer)||(this.gameService.activeCorrFalseWindow() && !this.lastAnswer)){
                    this.corrDisplayed=true;
                }
                else if (this.lastQuestion){
                    this.result=true;
                }
                else
                this.nextQuestion();
            }
            else {
                if (this.lastQuestion){
                    this.result=true;
                    return;
                }
                this.nextQuestion();
            }
        }
        else
            this.nextQuestion();
    }

    clickOnCorrWindow(clickOnQuitt: boolean){
        this.corrDisplayed=false;
        if (!this.lastQuestion)
        this.nextQuestion();
        else {
            this.result=true;

        }

    }
}

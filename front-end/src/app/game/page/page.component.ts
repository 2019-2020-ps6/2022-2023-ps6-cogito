import { Component, Input } from "@angular/core";

import { GameQuestion } from "src/models/gameQuestion.model";
import { GameService } from "src/services/game.service";
import { Answer } from "../../../models/answer.model";
import {ThemeService} from "src/services/theme.service";

@Component({
    selector: "app-game-page",
    templateUrl: "./page.component.html",
    styleUrls: ["./page.component.scss"]
})
export class GamePageComponent {
    public themeId : number = 0;
    public question?: GameQuestion;
    public lastQuestion: boolean = false;
    public corrDisplayed: boolean = false;
    public lastAnswer: boolean = false;
    public result: boolean = false;
    constructor(private gameService: GameService, private themeService: ThemeService) {
        this.themeService.selectedTheme$.subscribe((theme) => {
            this.themeId = theme?.id as number;
        })
        this.gameService.currentQuestion$.subscribe((question?: GameQuestion): void => {
            this.question = question;
            this.lastQuestion = this.gameService.islastQuestion();
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
        }
        else {
            this.gameService.stopSound();
            this.gameService.nextQuestion();
            if (this.question)
            this.gameService.playSound(this.question.sound);
        }
    }

    leavePage(themeId : number): void {
        this.gameService.stopSound();
        this.gameService.leaveGame(themeId);
    }

    clickOnCheckAnswer(answer: Answer): void{
        this.gameService.stopSound();
        if (this.gameService.activeCorrWindow())
        this.corrAnswerWindow(this.question);
        else
        this.nextQuestion();
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

import { Component, EventEmitter, Input, Output } from "@angular/core";

import { GameQuestion } from "src/models/gameQuestion.model";
import { idList } from "src/services/game.service";
import { Answer } from "../../../models/answer.model";

@Component({
    selector: "question-compo",
    templateUrl: "./question.component.html",
    styleUrls: ["./question.component.scss"]
})
export class GameQuestionComponent {
    public question?: GameQuestion;
    public lastQuestion: boolean = false;
    imageUrl:string="./assets/pictures/audio-on.png";

    @Output()
    clickOncheckAnswer: EventEmitter<Answer> = new EventEmitter<Answer>();

    constructor(private gameService: idList) {
        this.gameService.currentQuestion$.subscribe((question?: GameQuestion): void => {
            this.question = question;
            this.lastQuestion = this.gameService.islastQuestion();
            if (this.question)
            this.gameService.playSound(this.question.sound);
        });
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

    checkAnswer(answer: Answer): void{
        this.gameService.checkAnswer(answer,this.question);
        this.clickOncheckAnswer.emit(answer);
    }
}
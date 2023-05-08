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

    constructor(private gameService: idList) {
        this.gameService.currentQuestion$.subscribe((question?: GameQuestion): void => {
            this.question = question;
            // console.log("Before last question: ", this.lastQuestion);
            this.lastQuestion = this.gameService.islastQuestion();
            // console.log("After last question: ", this.lastQuestion);
        });
    }

    nextQuestion(): void {
        if (this.gameService.islastQuestion()){
            this.finishGame();
        }
        else {
            console.log("Ask next question");
            this.gameService.nextQuestion();
        }
    }

    finishGame(): void {
        this.lastQuestion = false;
        this.gameService.finishGame();
    }

    leavePage(): void {
        this.gameService.leaveGame();
    }

    checkAnswer(answer: Answer){
        console.log(answer);
        this.gameService.checkAnswer(answer,this.question);
        this.nextQuestion();

    }
}

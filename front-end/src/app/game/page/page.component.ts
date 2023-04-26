import { Component } from "@angular/core";

import { GameQuestion } from "src/models/gameQuestion.model";
import { GameService } from "src/services/game.service";

@Component({
    selector: "app-game-page",
    templateUrl: "./page.component.html",
    styleUrls: ["./page.component.scss"]
})
export class GamePageComponent {
    public question?: GameQuestion;
    public lastQuestion: boolean = false;

    constructor(private gameService: GameService) {
        this.gameService.currentQuestion$.subscribe((question?: GameQuestion): void => {
            this.question = question;
            this.lastQuestion = this.gameService.islastQuestion();
        });
    }

    nextQuestion(): void {
        console.log("Ask next question");
        this.gameService.nextQuestion();
    }

    finishGame(): void {
        console.log("Game finished");
    }
}

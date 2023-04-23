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

    constructor(private gameService: GameService) {
        this.gameService.currentQuestion$.subscribe((question?: GameQuestion): void => {
            this.question = question;
        })
    }
}

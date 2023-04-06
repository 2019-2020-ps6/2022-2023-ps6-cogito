import { Component, EventEmitter, OnInit, Output } from "@angular/core";

import { GameInstance } from "src/models/gameInstance.model";
import { GameService } from "src/services/game.service";

@Component({
    selector: "app-game-gameResult",
    templateUrl: "./gameResult.component.html",
    styleUrls: ["./gameResult.component.scss"]
})
export class GameResultComponent implements OnInit {
    public quizId!: number;
    @Output()
    clickOnQuitt: EventEmitter<boolean> = new EventEmitter<boolean>();


    constructor(public gameService: GameService) {
        this.gameService.gameInstance$.subscribe((gameInstance: GameInstance) => {
            this.quizId = gameInstance.quizId;
        });
    }


    ngOnInit(): void { }

    quitClicked() {
        this.clickOnQuitt.emit(true);
    }
}
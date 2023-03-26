import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GameInstance } from 'src/models/gameInstance.modele';
import { GameService } from 'src/services/game.service';

@Component({
    selector: 'app-game-result',
    templateUrl: './gameResult.component.html',
    styleUrls: ['./gameResult.component.scss']
})
export class GameResultComponent implements OnInit {
    @Output()
    clickOnContinue: EventEmitter<boolean> = new EventEmitter<boolean>();
    public quizName: string="";


    constructor(public gameService: GameService) {
        this.gameService.gameInstance$.subscribe((gameInstance: GameInstance) => {
            this.quizName = gameInstance.quizId;
        });
    }


    ngOnInit(): void { }

    continueClicked(){
        this.clickOnContinue.emit(true);
    }
}
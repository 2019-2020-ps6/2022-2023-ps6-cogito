import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { GameInstance } from 'src/models/gameInstance.model';
import { GameService } from 'src/services/game.service';

@Component({
    selector: 'app-game-question-result',
    templateUrl: './questionResult.component.html',
    styleUrls: ['./questionResult.component.scss']
})
export class GameQuestionResultComponent implements OnInit {
    public questionName: string="";

    @Input()
    public isCorrect: boolean=false;
    @Output()
    clickOnContinue: EventEmitter<boolean> = new EventEmitter<boolean>();


    constructor(public gameService: GameService) {
        this.gameService.gameInstance$.subscribe((gameInstance: GameInstance) => {
            this.questionName=gameInstance.gameQuestionList[this.gameService.currentQuestionIndex].title;
        });
    }


    ngOnInit(): void { }

    continueClicked(){
        this.clickOnContinue.emit(true);
    }
}
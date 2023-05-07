import { Component, EventEmitter, OnInit, Output } from "@angular/core";

import { GameInstance } from "src/models/gameInstance.model";
import { GameService } from "src/services/game.service";
import { GameQuestion } from 'src/models/gameQuestion.model';
import { GameAnswer } from 'src/models/gameAnswer.model';

@Component({
    selector: "app-game-gameResult",
    templateUrl: "./gameResult.component.html",
    styleUrls: ["./gameResult.component.scss"]
})
export class GameResultComponent implements OnInit {
    public quizId!: number;
    public questions!: GameQuestion[];
    public trueAnswers!: GameAnswer[];
    @Output()
    clickOnQuitt: EventEmitter<boolean> = new EventEmitter<boolean>();


    constructor(public gameService: GameService) {
        this.gameService.gameInstance$.subscribe((gameInstance: GameInstance) => {
            this.quizId = gameInstance.quizId;
            this.questions = gameInstance.gameQuestionList.filter((x, i) => gameInstance.gameQuestionList.indexOf(x) === i);
            this.gameService.stopSound();
            this.trueAnswers=[];
            for (let i=0; i<this.questions.length; i++){
                let answers=this.questions[i].gameAnswerList;
                this.trueAnswers.push(answers[0]);
            }
        });
    }


    ngOnInit(): void { }

    quitClicked() {
        this.gameService.finalScores();
        this.clickOnQuitt.emit(true);
    }
}
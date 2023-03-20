import { Component, OnInit } from '@angular/core';
import { GameQuestion } from 'src/models/gameQuestion.modele';
import { GameService } from 'src/services/game.service';

@Component({
    selector: 'app-game-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class GameQuestionComponent implements OnInit {
    public question: GameQuestion | undefined;

    constructor(public gameService: GameService) {
        this.gameService.selectedQuestion$.subscribe((question: GameQuestion) => {
            this.question = question;
        });
    }

    ngOnInit(): void { }
}
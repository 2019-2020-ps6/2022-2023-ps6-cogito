import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GameAnswer } from 'src/models/gameAnswer.model';
import { GameQuestion } from 'src/models/gameQuestion.model';
import { GameService } from 'src/services/game.service';

@Component({
    selector: 'app-game-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class GameQuestionComponent implements OnInit {
    public question!: GameQuestion;
    @Output()
    isAnwsered: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output()
    stateAnswered: EventEmitter<boolean> = new EventEmitter<boolean>();


    constructor(public gameService: GameService) {
        this.gameService.selectedQuestion$.subscribe((question: GameQuestion) => {
            this.question = question;
        });
    }


    ngOnInit(): void { }

    selectAnswer(answer: GameAnswer): void {
        this.gameService.checkAnswer(answer);
        this.isAnwsered.emit(true);
        this.stateAnswered.emit(answer.isCorrect);
    }
}
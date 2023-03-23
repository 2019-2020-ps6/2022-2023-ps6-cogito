import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameAnswer } from 'src/models/gameAnswer.modele';

@Component({
    selector: 'app-game-answer',
    templateUrl: './answer.component.html',
    styleUrls: ['./answer.component.scss']
})
export class GameAnswerComponent implements OnInit {
    @Input()
    answer!: GameAnswer;

    @Output()
    selectedAnswer: EventEmitter<GameAnswer> = new EventEmitter<GameAnswer>();


    constructor() { }


    ngOnInit(): void { }

    selectAnswer(): void {
        this.selectedAnswer.emit(this.answer);
    }
}
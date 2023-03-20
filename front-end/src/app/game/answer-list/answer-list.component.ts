import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Answer } from 'src/models/answer.modele';
import { AnswerList } from 'src/models/answerList.modele';

@Component({
    selector: 'app-game-answer-list',
    templateUrl: './answer-list.component.html',
    styleUrls: ['./answer-list.component.scss']
})
export class GameAnswerListComponent implements OnInit {
    @Input()
    answers!: AnswerList;

    @Output()
    selectedAnswer: EventEmitter<Answer> = new EventEmitter<Answer>();

    constructor() { }

    ngOnInit(): void { }

    selectAnswer(answer: Answer) {
        console.log("Sending answer");
        this.selectedAnswer.emit(answer);
    }
}
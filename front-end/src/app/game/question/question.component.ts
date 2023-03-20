import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Answer } from 'src/models/answer.modele';
import { Question } from 'src/models/question.modele';

@Component({
    selector: 'app-game-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class GameQuestionComponent implements OnInit {

    @Input()
    question!: Question;

    @Output()
    selectedAnswer: EventEmitter<Answer> = new EventEmitter<Answer>();

    constructor() { }

    ngOnInit(): void { }

    selectAnswer(answer: Answer) {
        this.selectedAnswer.emit(answer);
    }
}
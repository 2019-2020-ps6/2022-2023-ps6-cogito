import { Component, OnInit, Input } from '@angular/core';
import { AnswerList } from 'src/models/answerList.modele';

@Component({
    selector: 'app-game-answer-list',
    templateUrl: './answer-list.component.html',
    styleUrls: ['./answer-list.component.scss']
})
export class GameAnswerListComponent implements OnInit {
    @Input()
    answers: AnswerList = { answers: [] };
    constructor() {
    }

    ngOnInit(): void {}

    isCorrect(value: boolean){
        console.log(value)
      }
}
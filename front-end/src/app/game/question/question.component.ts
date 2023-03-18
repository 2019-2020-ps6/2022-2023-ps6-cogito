import { Component, OnInit } from '@angular/core';
import { Question } from 'src/models/question.modele';
import { Answer } from 'src/models/answer.modele';
import { AnswerList } from 'src/models/answerList.modele';

@Component({
    selector: 'app-game-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class GameQuestionComponent implements OnInit {
    answers: Answer[] = [
        {value: 'cuivre', isCorrect: false},
        {value: 'vent', isCorrect: false},
        {value: 'cordes', isCorrect: true},
        {value: 'percussions', isCorrect: false}
    ];
    al: AnswerList = { answers: this.answers };
    question: Question = {
        id: '',
        label: 'La guitare est un instrument à',
        answerList: this.al
    };

    constructor() { }

    ngOnInit(): void { }
}
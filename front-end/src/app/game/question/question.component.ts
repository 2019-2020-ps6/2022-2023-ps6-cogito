import { Component, OnInit } from '@angular/core';
import { QUESTION_INS4 } from 'src/mocks/questioninstru.mock';
import { QUESTION_INS3 } from 'src/mocks/questioninstru.mock';
import { Question } from 'src/models/question.modele';

@Component({
    selector: 'app-game-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class GameQuestionComponent implements OnInit {
    question: Question = QUESTION_INS3;

    constructor() { }

    ngOnInit(): void { }
}
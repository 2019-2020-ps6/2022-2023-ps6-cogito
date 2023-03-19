import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/models/question.modele';

@Component({
    selector: 'app-game-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class GameQuestionComponent implements OnInit {

    @Input()
    question!: Question;

    constructor() { }

    ngOnInit(): void { }
}
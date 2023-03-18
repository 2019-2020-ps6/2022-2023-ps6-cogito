import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-game-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class GamePageComponent implements OnInit {

    quiztheme='Instruments'
    currentQuestion=4
    nbquestions=10
    constructor() {}

    ngOnInit(): void {}
}
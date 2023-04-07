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
    private audio!:HTMLAudioElement |undefined;
    imageUrl:string="./assets/pictures/audio-off.png";

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

    playSound() {
        this.audio=new Audio(this.question.sound);
        if (this.audio){
            this.audio.play()
            this.imageUrl="./assets/pictures/audio-on.png";
        }
    }

    stopSound(){
        if (this.audio){
            this.audio.pause();
            this.audio.currentTime = 0;
            this.imageUrl="./assets/pictures/audio-off.png";
        }
    }

    clickOnSpeaker(){
        if (this.imageUrl=="./assets/pictures/audio-on.png"){
            this.stopSound();
        }
        else
        this.playSound();

    }

}
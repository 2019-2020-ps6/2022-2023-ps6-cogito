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
    imageUrl:string="./assets/pictures/audio-on.png";

    @Output()
    isAnwsered: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output()
    stateAnswered: EventEmitter<boolean> = new EventEmitter<boolean>();


    constructor(public gameService: GameService) {
        this.gameService.selectedQuestion$.subscribe((question: GameQuestion) => {
            this.question = question;
        });
    }


    ngOnInit(): void {
        setTimeout(()=>{
            this.gameService.stopSound();
            if (this.question.sound){
                this.gameService.playSound(this.question.sound);
                this.imageUrl="./assets/pictures/audio-on.png"
            }
        },500);
    }

    selectAnswer(answer: GameAnswer): void {
        this.gameService.checkAnswer(answer);
        this.isAnwsered.emit(true);
        this.stateAnswered.emit(answer.isCorrect);
    }

    playSound() {
        if (this.question.sound){
            this.gameService.playSound(this.question.sound);
            this.imageUrl="./assets/pictures/audio-on.png";
        }
    }

    stopSound(){
        if (this.question.sound){
        this.gameService.stopSound();
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
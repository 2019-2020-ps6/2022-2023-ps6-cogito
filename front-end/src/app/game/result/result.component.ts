import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { gameService } from "../../../services/game.service";
import { GameQuestion } from "../../../models/gameQuestion.model";
import { Answer } from "../../../models/answer.model";
import { Quiz } from "../../../models/quiz.model";

@Component({
    selector: "quizResult",
    templateUrl: "./result.component.html",
    styleUrls: ["./result.component.scss"]
})
export class GameResultComponent implements OnInit {

    public questions?: GameQuestion[] = [];
    public trueAnswers?: Answer[] = [];

    @Input()
    public lastAnswer?: boolean;

    @Output()
    finalClick: EventEmitter<boolean> = new EventEmitter<boolean>();


    constructor(private gameService: gameService) {
        this.gameService.currentQuestion$.subscribe((): void => {
            let res = this.gameService.finalScore();
            this.questions = Array.from(res.keys());
            this.trueAnswers=[];
            for (let i=0; i<this.questions.length; i++){
                let answers=this.questions[i].answerList;
                for (let j=0; j<answers.length; j++){
                    if (answers[j].isCorrect)
                    this.trueAnswers.push(answers[j]);
                }
            }
        })
    }


    ngOnInit(): void {
     }

    finishedClick() {
        console.log(this.gameService.finalScore());
        this.gameService.stopSound();
        this.gameService.finishGame();
    }
}

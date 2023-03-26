import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { GAME_INSTRUMENTS } from "src/mocks/gameInstance.mock";
import { GameAnswer } from "src/models/gameAnswer.modele";
import { GameInstance } from "src/models/gameInstance.modele";
import { GameQuestion } from "src/models/gameQuestion.modele";

@Injectable({
    providedIn: 'root'
})
export class GameService {
    private gameInstance: GameInstance;
    public gameInstance$: BehaviorSubject<GameInstance>;
    private selectedQuestion: GameQuestion;
    public selectedQuestion$: BehaviorSubject<GameQuestion>;
    public currentQuestionIndex: number;


    constructor() {
        this.gameInstance = GAME_INSTRUMENTS;
        this.gameInstance$ = new BehaviorSubject(this.gameInstance);
        this.selectedQuestion = this.gameInstance.gameQuestionList[0];
        this.selectedQuestion$ = new BehaviorSubject(this.selectedQuestion);
        this.currentQuestionIndex=0;
    }


    selectQuestion(question: GameQuestion): void {
        this.selectedQuestion = question;
        this.selectedQuestion$.next(this.selectedQuestion);
    }

    checkAnswer(answer: GameAnswer): void {
        console.log(answer.isCorrect);
        this.currentQuestionIndex = this.gameInstance.gameQuestionList.indexOf(this.selectedQuestion);
        if (this.currentQuestionIndex < this.gameInstance.gameQuestionList.length - 1) {
                this.selectQuestion(this.gameInstance.gameQuestionList[this.currentQuestionIndex + 1]);
        } else {
                console.log("End of quiz");
            }
    }
}
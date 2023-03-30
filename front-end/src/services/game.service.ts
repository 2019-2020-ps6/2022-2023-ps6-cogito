import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { GAME_INSTRUMENTS } from "src/mocks/gameInstance.mock";
import { GameAnswer } from "src/models/gameAnswer.model";
import { GameInstance } from "src/models/gameInstance.model";
import { GameQuestion } from "src/models/gameQuestion.model";

@Injectable({
    providedIn: "root"
})
export class GameService {
    private gameInstance: GameInstance;
    public gameInstance$: BehaviorSubject<GameInstance>;
    public selectedQuestion$: BehaviorSubject<GameQuestion>;


    constructor() {
        this.gameInstance = GAME_INSTRUMENTS;
        this.gameInstance$ = new BehaviorSubject(this.gameInstance);
        this.selectedQuestion$ = new BehaviorSubject(this.gameInstance.gameQuestionList[0]);
    }


    selectQuestion(question: GameQuestion): void {
        this.selectedQuestion$.next(question);
    }

    checkAnswer(answer: GameAnswer): void {
        console.log(answer.isCorrect);
    }
}
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { GAME_INSTRUMENTS } from "src/mocks/gameInstance.mock";
import { GameInstance } from "src/models/gameInstance.modele";
import { GameQuestion } from "src/models/gameQuestion.modele";

@Injectable({
    providedIn: 'root'
})
export class GameService {
    private gameInstance: GameInstance = GAME_INSTRUMENTS;
    public gameInstance$: BehaviorSubject<GameInstance> = new BehaviorSubject(this.gameInstance);
    public selectedQuestion$: Subject<GameQuestion> = new Subject();


    constructor() { }


    selectQuestion(question: GameQuestion) {
        this.selectedQuestion$.next(question);
    }
}
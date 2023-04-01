import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { GAME_INSTRUMENTS } from "src/mocks/gameInstance.mock";
import { GameAnswer } from "src/models/gameAnswer.model";
import { GameInstance } from "src/models/gameInstance.model";
import { GameQuestion } from "src/models/gameQuestion.model";

@Injectable({
    providedIn: 'root'
})
export class GameService {
    private gameInstance: GameInstance;
    public gameInstance$: BehaviorSubject<GameInstance>;
    private selectedQuestion: GameQuestion;
    public selectedQuestion$: BehaviorSubject<GameQuestion>;
    public currentQuestionIndex: number;
    public answers: Map<GameQuestion,boolean>;


    constructor() {
        this.gameInstance = GAME_INSTRUMENTS;
        this.gameInstance$ = new BehaviorSubject(this.gameInstance);
        this.selectedQuestion = this.gameInstance.gameQuestionList[0];
        this.selectedQuestion$ = new BehaviorSubject(this.selectedQuestion);
        this.currentQuestionIndex=0;
        this.answers=new Map();
        for (let i=0; i<this.gameInstance.gameQuestionList.length; i++){
            this.answers.set(this.gameInstance.gameQuestionList[i],false)
        }
    }


    selectQuestion(question: GameQuestion): void {
        this.selectedQuestion = question;
        this.selectedQuestion$.next(this.selectedQuestion);
        this.currentQuestionIndex++;
    }

    checkAnswer(answer: GameAnswer): void {
        this.currentQuestionIndex = this.gameInstance.gameQuestionList.indexOf(this.selectedQuestion);
        if (this.currentQuestionIndex < this.gameInstance.gameQuestionList.length - 1) {
            this.answers.set(this.gameInstance.gameQuestionList[this.currentQuestionIndex],answer.isCorrect)
            console.log(this.currentQuestionIndex);
            this.selectQuestion(this.gameInstance.gameQuestionList[this.currentQuestionIndex + 1]);
            this.currentQuestionIndex--;
        } else {
                console.log("End of quiz");
            }
    }

    reinitQuiz(){
        this.gameInstance = GAME_INSTRUMENTS;
        this.gameInstance$ = new BehaviorSubject(this.gameInstance);
        this.selectedQuestion = this.gameInstance.gameQuestionList[0];
        this.selectedQuestion$ = new BehaviorSubject(this.selectedQuestion);
        this.currentQuestionIndex=0;
        this.answers=new Map();
        for (let i=0; i<this.gameInstance.gameQuestionList.length; i++){
            this.answers.set(this.gameInstance.gameQuestionList[i],false)
        }
    }
}
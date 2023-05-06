import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { GAME_INSTRUMENTS } from "src/mocks/gameInstance.mock";
import { GameAnswer } from "src/models/gameAnswer.model";
import { GameInstance } from "src/models/gameInstance.model";
import { GameQuestion } from "src/models/gameQuestion.model";
import { QuizSoundService } from "./sound-quiz.service";

@Injectable({
    providedIn: "root"
})
export class GameService {
    private gameInstance: GameInstance;
    public gameInstance$: BehaviorSubject<GameInstance>;
    private selectedQuestion: GameQuestion;
    private originalLenght: number;
    public selectedQuestion$: BehaviorSubject<GameQuestion>;
    public currentQuestionIndex: number;
    public answers: Map<GameQuestion,boolean>;


    constructor(private soundService: QuizSoundService) {
        this.gameInstance = GAME_INSTRUMENTS;
        this.originalLenght = GAME_INSTRUMENTS.gameQuestionList.length;
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
            this.selectQuestion(this.gameInstance.gameQuestionList[this.currentQuestionIndex + 1]);
            this.currentQuestionIndex--;
        } else {
                console.log("End of quiz");
            }
    }

    reinitQuiz(){
        this.gameInstance.gameQuestionList.splice(this.originalLenght,  this.gameInstance.gameQuestionList.length - this.originalLenght);
        this.gameInstance$ = new BehaviorSubject(this.gameInstance);
        this.selectedQuestion = this.gameInstance.gameQuestionList[0];
        this.selectedQuestion$ = new BehaviorSubject(this.selectedQuestion);
        this.currentQuestionIndex=0;
        this.answers=new Map();
        for (let i=0; i<this.gameInstance.gameQuestionList.length; i++){
            this.answers.set(this.gameInstance.gameQuestionList[i],false)
        }
        console.log(this.gameInstance.gameQuestionList.length)
    }

    wrongAnswers(n:number){
        for (let i=0;i<n;i++){
            const q = this.gameInstance.gameQuestionList[i];
            const n = this.gameInstance.gameQuestionList.filter(element => element === q).length;
            console.log(!this.answers.get(q)&&n<2)
            if (!this.answers.get(q)&&n<2){
                this.gameInstance.gameQuestionList[this.gameInstance.gameQuestionList.length]=q;
            }
        }
    }

    playSound(soundUrl: string| undefined){
        if (soundUrl)
        this.soundService.playSound(soundUrl);
    }
    stopSound(){
        this.soundService.stopAllSounds();
    }
    
}
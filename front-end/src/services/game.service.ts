import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { QUESTIONS_INS } from "src/mocks/question.mock";
import { Question } from "src/models/question.modele";

@Injectable({
    providedIn: 'root'
})
export class GameService {
    private questions: Question[] = QUESTIONS_INS;
    public questions$: BehaviorSubject<Question[]> = new BehaviorSubject(this.questions);
    public questionSelected$: Subject<Question> = new Subject();


    constructor() {
        if (this.questions.length > 0) {
            this.questionSelected$.next(this.questions[0]);
        } else {
            throw new ErrorEvent("No questions found");
        }
    }

    selectQuestion(question: Question) {
        this.questionSelected$.next(question);
    }
}
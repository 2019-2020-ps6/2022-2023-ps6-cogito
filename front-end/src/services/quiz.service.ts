import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

import { QUIZZES_MUSIQUE } from "../mocks/quiz.mock";

import { Quiz } from "../models/quiz.model";

@Injectable({
    providedIn: "root"
})
export class QuizService {
    private quizList: Quiz[] = QUIZZES_MUSIQUE.sort((a, b) => a.title.localeCompare(b.title));
    public quizList$: BehaviorSubject<Quiz[]> = new BehaviorSubject<Quiz[]>(this.quizList);
    public selectedQuiz$: Subject<Quiz> = new Subject<Quiz>();

    constructor() {}


}
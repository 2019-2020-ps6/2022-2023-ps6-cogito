import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Quiz } from "../models/quiz.model";
import { QUIZ_LIST } from "../mocks/quiz.mock";
import { QuizQuestion } from "../models/quizQuestion.model";

@Injectable({
    providedIn: "root"
})
export class AdminQuizService {
    private quizzes: Quiz[];
    public quizzes$: BehaviorSubject<Quiz[]>;
    public selectedQuiz$: BehaviorSubject<Quiz> = new BehaviorSubject<Quiz>({} as Quiz);
    public selectedQuizSubject$: Subject<Quiz> = new Subject<Quiz>();


    constructor() {
        this.quizzes = QUIZ_LIST;
        this.quizzes$ = new BehaviorSubject(this.quizzes);
        this.selectedQuiz$.subscribe(this.selectedQuizSubject$);
    }


    addQuiz(quiz: Quiz): void {
        if (quiz.id === undefined || quiz.id === -1) {
            quiz.id = this.quizzes.length + 1;
        }
        this.quizzes.push(quiz);
        this.quizzes$.next(this.quizzes);
        console.log(this.quizzes);
    }

    deleteQuiz(quiz: Quiz): void {
        this.quizzes.forEach((value: Quiz, index: number): void => {
            if (value.title == quiz.title) {
                this.quizzes.splice(index, 1);
            }
        });

        this.quizzes$.next(this.quizzes);
    }

    addQuestion(quiz: Quiz, question: QuizQuestion): void {
        this.quizzes.forEach((value: Quiz, index: number): void => {
            if (value.title == quiz.title) {
                this.quizzes[index].quizQuestionList.push(question);
            }
        });
    }

    deleteQuestion(quiz: Quiz, question: QuizQuestion): void {
        this.quizzes.forEach((value: Quiz, index: number): void => {
            if (value.title == quiz.title) {
                this.quizzes[index].quizQuestionList.forEach((value: QuizQuestion, index: number): void => {
                    if (value.title == question.title) {
                        this.quizzes[index].quizQuestionList.splice(index, 1);
                    }
                });
            }
        });
    }

    getQuizById(id: number): Quiz | undefined {
        return this.quizzes.find((quiz) => quiz.id === id);
    }

    getQuestionById(quiz: Quiz, id: number): QuizQuestion | undefined {
        return this.quizzes.find((quiz) => quiz === quiz)?.quizQuestionList.find((question) => question.id === id);
    }

    updateQuiz(quiz: Quiz): void {
        if (quiz.id === undefined || quiz.id === -1) {
            this.addQuiz(quiz);
        }
        let index = this.quizzes.findIndex((q) => q.id === quiz.id);
        this.quizzes[index] = quiz;
        this.quizzes$.next(this.quizzes);
    }

    setSelected(idOrQuiz?: number | Quiz | null) {
        if (idOrQuiz === null) {
            this.selectedQuiz$.next({} as Quiz);
            return;
        }
        let q:  Quiz | undefined;
        if (typeof idOrQuiz === 'number') {
            q = this.getQuizById(idOrQuiz);
        } else {
            q = idOrQuiz;
        }
        if (q !== undefined) {
            this.selectedQuiz$.next(q);
            this.selectedQuizSubject$.next(q);
        }
    }
}


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
    public selectedQuiz$: Subject<Quiz>;


    constructor() {
        this.quizzes = QUIZ_LIST;
        this.quizzes$ = new BehaviorSubject(this.quizzes);
        this.selectedQuiz$ = new Subject();
    }


    addQuiz(quiz: Quiz): void {
        this.quizzes.push(quiz);
        this.quizzes$.next(this.quizzes);
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

    updateQuiz(quiz: Quiz): void {
        console.log(quiz);
        let index: number = this.quizzes.findIndex((q: Quiz) => q.id === quiz.id);
        this.quizzes[index] = quiz;
        console.log(this.quizzes);
        this.quizzes$.next(this.quizzes);
    }

    setSelected(id: number): void {
        let q: Quiz = { ...this.quizzes.find((quiz: Quiz) => quiz.id === id) } as Quiz;
        if (q != undefined) {
            this.selectedQuiz$.next(q);
        }
    }
}


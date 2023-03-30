import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AdminQuiz } from '../models/admin-quiz.model';
import { Question } from '../models/question.model';
import { QUIZ_LIST } from '../mocks/quiz-list-with-id.mock';

@Injectable({
  providedIn: 'root'
})
export class AdminQuizService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

   /**
    * The list of quiz.
    * The list is retrieved from the mock.
    */
  private quizzes: AdminQuiz[] = QUIZ_LIST;
  private searchTerms = new Subject<string>();

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<AdminQuiz[]> = new BehaviorSubject(QUIZ_LIST);

  public quizSelected$: Subject<AdminQuiz> = new Subject();

  constructor() {
  }

  addQuiz(quiz: AdminQuiz) {
    
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subjecta nouvelle valeur de la liste des quiz
    this.quizzes.push(quiz);
    this.quizzes$.next(this.quizzes);
  }

  deleteQuiz(quiz: AdminQuiz) {
    this.quizzes.forEach((value,index)=>{
      if(value.name == quiz.name) this.quizzes.splice(index,1);
    });

    this.quizzes$.next(this.quizzes);
    console.log("AdminQuizService DELETE");
  }

  addQuestion(quiz: AdminQuiz, question: Question) {
    this.quizzes.forEach((value,index)=>{
      if(value.name == quiz.name) this.quizzes[index].questions.push(question);
    });
  }

  deleteQuestion(quiz: AdminQuiz, question: Question) {
    this.quizzes.forEach((value,index)=>{
      if(value.name == quiz.name) this.quizzes[index].questions.forEach((value,index)=>{
        if(value.label == question.label) this.quizzes[index].questions.splice(index,1);
      });
    });
  }

  getQuizById(id: number): AdminQuiz | undefined {
    return this.quizzes.find((quiz) => quiz.id === id);
  }

  updateQuiz(quiz: AdminQuiz) {
    console.log(quiz)
    let index = this.quizzes.findIndex((q) => q.id === quiz.id);
    console.log("index",index);
    this.quizzes[index] = quiz;
    console.log(this.quizzes)
    this.quizzes$.next(this.quizzes);
  }

  setSelected(id: number) {
  
    let q ={...this.quizzes.find((quiz) => quiz.id === id)} as AdminQuiz;
    if(q != undefined)
      this.quizSelected$.next(q);
  }
}


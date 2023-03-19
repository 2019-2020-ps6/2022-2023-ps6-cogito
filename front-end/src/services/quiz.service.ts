import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';
import { QUIZ_LIST } from '../mocks/quiz-list-with-id.mock';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

   /**
    * The list of quiz.
    * The list is retrieved from the mock.
    */
  private quizzes: Quiz[] = QUIZ_LIST;
  private searchTerms = new Subject<string>();

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(QUIZ_LIST);

  constructor() {
  }

  addQuiz(quiz: Quiz) {
    
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subjecta nouvelle valeur de la liste des quiz
    this.quizzes.push(quiz);
    this.quizzes$.next(this.quizzes);
  }

  deleteQuiz(quiz: Quiz) {
    this.quizzes.forEach((value,index)=>{
      if(value.name == quiz.name) this.quizzes.splice(index,1);
    });

    this.quizzes$.next(this.quizzes);
    console.log("QuizService DELETE");
  }

  addQuestion(quiz: Quiz, question: Question) {
    this.quizzes.forEach((value,index)=>{
      if(value.name == quiz.name) this.quizzes[index].questions.push(question);
    });
  }

  deleteQuestion(quiz: Quiz, question: Question) {
    this.quizzes.forEach((value,index)=>{
      if(value.name == quiz.name) this.quizzes[index].questions.forEach((value,index)=>{
        if(value.label == question.label) this.quizzes[index].questions.splice(index,1);
      });
    });
  }

  getQuizById(id: number): Quiz | undefined {
    return this.quizzes.find((quiz) => quiz.id === id);
  }
}


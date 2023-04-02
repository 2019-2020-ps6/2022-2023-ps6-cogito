import { Question } from 'src/models/question.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Quiz } from '../models/quiz.model';
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

  public quizSelected$: BehaviorSubject<Quiz> = new BehaviorSubject<Quiz>({} as Quiz);


  public quizSelectedSubject: Subject<Quiz> = new Subject<Quiz>();

  constructor() {
    this.quizSelected$.subscribe(this.quizSelectedSubject);
  }

  addQuiz(quiz: Quiz) {
    if(quiz.id === undefined || quiz.id === -1){
      console.log(quiz);
      quiz.id = this.quizzes.length + 1;
    }
    this.quizzes.push(quiz);
    this.quizzes$.next(this.quizzes);
  }

  deleteQuiz(quiz: Quiz) {
    this.quizzes.forEach((value,index)=>{
      if(value.name == quiz.name) this.quizzes.splice(index,1);
    });

    this.quizzes$.next(this.quizzes);
  }

  addQuestion(quiz: Quiz, question: Question) {
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

  getQuestionById(quiz: Quiz, id: number): Question | undefined {
    return this.quizzes.find((quiz) => quiz === quiz)?.questions.find((question) => question.id === id);
  }
  updateQuiz(quiz: Quiz) {
    if(quiz.id === undefined || quiz.id === -1){
      this.addQuiz(quiz);
    }
    let index = this.quizzes.findIndex((q) => q.id === quiz.id);
    this.quizzes[index] = quiz;
    this.quizzes$.next(this.quizzes);
  }

  setSelected(idOrQuiz?: number | Quiz | null) {
      if (idOrQuiz === null) {
        this.quizSelected$.next({} as Quiz);
        return;
      }
      let q:  Quiz | undefined;
      if (typeof idOrQuiz === 'number') {
        q = this.getQuizById(idOrQuiz);
      } else {
        q = idOrQuiz;
      }
      if (q !== undefined) {
        this.quizSelected$.next(q);
        this.quizSelectedSubject.next(q);
      }
    }

}


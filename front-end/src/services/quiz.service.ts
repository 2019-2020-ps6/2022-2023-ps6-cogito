import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Quiz } from 'src/models/quiz.model';
import { Question } from 'src/models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private selectedQuiz: Quiz | undefined;
  private selectionQuizSubject: BehaviorSubject<Quiz> = new BehaviorSubject<Quiz>({} as Quiz);

  private selectedQuestion: Question | undefined;
  private selectionQuestionSubject: BehaviorSubject<Question> = new BehaviorSubject<Question>({} as Question);

  constructor() { 
    this.selectionQuizSubject.next(this.selectedQuiz as Quiz);
    this.selectionQuestionSubject.next(this.selectedQuestion as Question);
  }

  selectQuiz(quiz?: Quiz): void { 
    this.selectedQuiz = quiz;
    this.selectionQuizSubject?.next(this.selectedQuiz as Quiz);
  }

  getSelectedQuiz(): Observable<Quiz> {
    return this.selectionQuizSubject.asObservable();
  }

  selectQuestion(question?: Question): void {
    this.selectedQuestion = question;
    this.selectionQuestionSubject?.next(this.selectedQuestion as Question);
  }

  getSelectedQuestion(): Observable<Question> {
    return this.selectionQuestionSubject.asObservable();
  }
}

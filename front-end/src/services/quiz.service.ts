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
  private oldSelectedQuestion: Question | undefined;


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
    this.oldSelectedQuestion = {...this.selectedQuestion} as Question;
  }

  getSelectedQuestion(): Observable<Question> {
    return this.selectionQuestionSubject.asObservable();
  }

  resetQuestion(): void {
    this.selectedQuestion = this.oldSelectedQuestion;
    this.selectionQuestionSubject?.next(this.selectedQuestion as Question);
    const quiz = this.selectedQuiz;
    if (!quiz || !quiz.questionList) {
      return;
    }
    const questionIndex = quiz.questionList.findIndex(q => q.id === this.selectedQuestion?.id);
    if (questionIndex === -1) {
      return;
    }
    const updatedQuestion = quiz.questionList[questionIndex];
    updatedQuestion.title = this.selectedQuestion?.title || '';
    updatedQuestion.difficulty = this.selectedQuestion?.difficulty || 1;
    updatedQuestion.hint = this.selectedQuestion?.hint || '';
    updatedQuestion.defaultMediaType = this.selectedQuestion?.defaultMediaType || 0;
    updatedQuestion.answerList = this.selectedQuestion?.answerList || [];
    this.selectionQuizSubject.next(quiz);
  } 

}

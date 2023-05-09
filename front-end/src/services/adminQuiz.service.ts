import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Quiz } from 'src/models/quiz.model';
import { Question } from 'src/models/question.model';
import {QUIZZES_ALL} from 'src/mocks/quiz.mock';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private quizList: Quiz[] = QUIZZES_ALL;

  private selectedQuiz: Quiz | undefined;
  private selectionQuizSubject: BehaviorSubject<Quiz> = new BehaviorSubject<Quiz>({} as Quiz);
  private oldSelectedQuiz: Quiz | undefined;

  private selectedQuestion: Question | undefined;
  private selectionQuestionSubject: BehaviorSubject<Question> = new BehaviorSubject<Question>({} as Question);
  private oldSelectedQuestion: Question | undefined;


  // behaviourSubject of quizList
  private quizListSubject: BehaviorSubject<Quiz[]> = new BehaviorSubject<Quiz[]>(this.quizList);

  private typeOfForm: string = "creation";

  constructor() { 
    this.selectionQuizSubject.next(this.selectedQuiz as Quiz);
    this.selectionQuestionSubject.next(this.selectedQuestion as Question);
  }

  getQuizList(): Observable<Quiz[]> {
    return this.quizListSubject.asObservable();
  }

  selectQuizById(id: number): void {
    this.selectedQuiz = this.quizList.find(quiz => quiz.id === id);
    this.oldSelectedQuiz = JSON.parse(JSON.stringify(this.selectedQuiz)) as Quiz;
    this.selectionQuizSubject?.next(this.selectedQuiz as Quiz);
  }

  selectQuiz(quiz?: Quiz): void { 
    this.selectQuizById(quiz?.id as number);
  }

  getSelectedQuiz(): Observable<Quiz> {
    return this.selectionQuizSubject.asObservable();
  }

  getIdOfSelectedQuiz(): number {
    return this.selectedQuiz?.id as number;
  }

  selectQuestion(question?: Question): void {
    this.selectedQuestion = question;
    this.typeOfForm = "edition";
    this.selectionQuestionSubject?.next({...this.selectedQuestion} as Question);
    this.oldSelectedQuestion = JSON.parse(JSON.stringify(this.selectedQuestion)) as Question;
  }

  deselectQuestion(): void {
    this.selectedQuestion = undefined;
    this.selectionQuestionSubject?.next(this.selectedQuestion as unknown as Question);
  }

  getSelectedQuestion(): Observable<Question> {
    return this.selectionQuestionSubject.asObservable();
  }

  updateQuestion(question: Question): void {
    const index = this.selectedQuiz?.questionList?.findIndex(q => q.id === question.id);
    if (index !== undefined && index >= 0) {
      const updatedQuestionList = [...this.selectedQuiz?.questionList as Question[]];
      updatedQuestionList[index] = question;
      this.selectedQuiz = {...this.selectedQuiz, questionList: updatedQuestionList} as Quiz;
      this.selectionQuizSubject.next(this.selectedQuiz as Quiz);
      this.updateQuizList(this.selectedQuiz);
      console.log(this.selectedQuiz);
    }
  }

  resetSelectedQuestion(): void{
    console.log("resetSelectedQuestion");
    this.selectedQuestion = JSON.parse(JSON.stringify(this.oldSelectedQuestion)) as Question;
    this.selectionQuestionSubject?.next(this.selectedQuestion as Question);
  }


  getIdOfNewAnswerOf(question : Question): number{
    let id = 0;
    question.answerList.forEach(answer => {
      if(answer.id > id){
        id = answer.id;
      }
    });
    return id + 1;
  }
  
  getIdOfNewQuestion(): number{
    let id = 0;
    this.selectedQuiz?.questionList?.forEach(question => {
      if(question.id > id){
        id = question.id;
      }
    });
    return id + 1;
  }

  removeQuestion(question: Question): void {
    const index = this.selectedQuiz?.questionList?.findIndex(q => q.id === question.id);
    if (index !== undefined && index >= 0) {
      const updatedQuestionList = [...this.selectedQuiz?.questionList as Question[]];
      updatedQuestionList.splice(index, 1);
      this.selectedQuiz = {...this.selectedQuiz, questionList: updatedQuestionList} as Quiz;
      this.selectionQuizSubject.next(this.selectedQuiz as Quiz);
      this.updateQuizList(this.selectedQuiz);
    }
  }

  addQuestion(question: Question): void {
    const updatedQuestionList = [...this.selectedQuiz?.questionList as Question[]];
    updatedQuestionList.push(question);
    this.selectedQuiz = {...this.selectedQuiz, questionList: updatedQuestionList} as Quiz;
    this.selectionQuizSubject.next(this.selectedQuiz as Quiz);
    this.updateQuizList(this.selectedQuiz);
  }

  createAndSelectNewQuestion(): void {
    const question = {} as Question;
    question.id = this.getIdOfNewQuestion();
    question.title = "";
    question.answerList = [];
    question.sound = "";
    question.picture = "";
    this.addQuestion(question);
    this.selectQuestion(question);
    this.typeOfForm = "creation";
    console.log(question)
  }

  getTypeOfForm(): string{
    return this.typeOfForm;
  }

  updateQuizList(quiz: Quiz): void {
    const index = this.quizList.findIndex(q => q.id === quiz.id);
    if (index !== undefined && index >= 0) {
      const updatedQuizList = [...this.quizList];
      updatedQuizList[index] = quiz;
      this.quizList = updatedQuizList;
    }
    else {
      console.log(quiz);
      this.quizList.push(quiz);
    }
    this.quizListSubject.next(this.quizList);
  }

  removeQuiz(quiz: Quiz): void {
    const index = this.quizList.findIndex(q => q.id === quiz.id);
    if (index !== undefined && index >= 0) {
      const updatedQuizList = [...this.quizList];
      updatedQuizList.splice(index, 1);
      this.quizList = updatedQuizList;
      this.quizListSubject.next(this.quizList);
    }
  }

  resetSelectedQuiz(): void {
    this.selectedQuiz = this.oldSelectedQuiz as Quiz;
    console.log(this.selectedQuiz);
    this.selectionQuizSubject.next(this.selectedQuiz as Quiz);
    this.updateQuizList(this.selectedQuiz as Quiz);
  }

}

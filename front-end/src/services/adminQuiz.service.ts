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

  private typeOfForm: string = "creation";

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
    }
  }

  resetSelectedQuestion(): void{
    console.log("resetSelectedQuestion");
    this.selectionQuestionSubject?.next(this.oldSelectedQuestion as Question);
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
    }
  }

  addQuestion(question: Question): void {
    const updatedQuestionList = [...this.selectedQuiz?.questionList as Question[]];
    updatedQuestionList.push(question);
    this.selectedQuiz = {...this.selectedQuiz, questionList: updatedQuestionList} as Quiz;
    this.selectionQuizSubject.next(this.selectedQuiz as Quiz);
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

  

}

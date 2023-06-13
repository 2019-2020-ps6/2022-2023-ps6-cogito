import { Question, Difficulty } from './../models/question.model';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Quiz } from 'src/models/quiz.model';
import { MediaType } from 'src/models/question.model';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private quizList: Quiz[]=[];

  private selectedQuiz: Quiz | undefined;
  private selectionQuizSubject: BehaviorSubject<Quiz> = new BehaviorSubject<Quiz>({} as Quiz);
  private oldSelectedQuiz: Quiz | undefined;

  private selectedQuestion: Question | undefined;
  private selectionQuestionSubject: BehaviorSubject<Question> = new BehaviorSubject<Question>({} as Question);
  private oldSelectedQuestion: Question | undefined;


  // behaviourSubject of quizList
  private quizListSubject: BehaviorSubject<Quiz[]> = new BehaviorSubject<Quiz[]>(this.quizList);

  private typeOfForm: string = "creation";

  private urlApi: string = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) { 
    this.http.get<Quiz[]>(this.urlApi+'/quizzes').subscribe((quizzes)=> {
      console.log("quizzes", quizzes)
      this.quizList=quizzes;
      this.quizListSubject.next(this.quizList);
      console.log("selectionQuizSubject", this.quizList)
    })
  }

  getQuizList(): Observable<Quiz[]> {
    console.log("getQuizList", this.quizList);
    return this.quizListSubject.asObservable();
  }

  selectQuizById(id: number): void {
    const urlWithId = this.urlApi+'/quizzes/' + id;
    console.log("urlWithId : " + urlWithId);
    this.http.get<Quiz>(urlWithId).subscribe((quiz) => {
      this.selectedQuiz=quiz;
      this.oldSelectedQuiz = JSON.parse(JSON.stringify(this.selectedQuiz)) as Quiz;
      this.selectionQuizSubject?.next(this.selectedQuiz as Quiz);
    });
    
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

  deselectQuiz(): void {
    this.selectedQuiz = undefined;
    this.selectionQuizSubject?.next(this.selectedQuiz as unknown as Quiz);
  }

  getSelectedQuestion(): Observable<Question> {
    return this.selectionQuestionSubject.asObservable();
  }

  updateQuestion(question: Question): void {
   console.log(question);

   let q = question as any;
   q.quizId = this.selectedQuiz?.id;
   q.defaultAnswersMediaType = 0;
   if(question.sound === "") delete question.sound;
   if(question.picture === "") delete question.picture;
   question.answerList.forEach((answer) => {
    if(answer.sound === "") delete answer.sound;
    if(answer.picture === "") delete answer.picture;
   })
   this.http.post<Question>(this.urlApi+'/questions/', q).subscribe((e) => {
    console.log(e);
   })
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

  getIdOfNewQuiz(): number{
    let id = 0;
    this.quizList.forEach(quiz => {
      if(quiz.id > id){
        id = quiz.id;
      }
    });
    return id + 1;
  }

  removeQuestion(question: Question): void {
    this.http.delete<Question>(this.urlApi+'/questions/'+question.id).subscribe((e) => {
      console.log(e);
      this.http.get<Question[]>(this.urlApi+'/questions/quiz/' + this.selectedQuiz?.id).subscribe((questions) => {
        if(this.selectedQuiz && this.selectedQuiz.questionList){
          this.selectedQuiz.questionList = questions;
          this.selectionQuizSubject.next(this.selectedQuiz);
        }
      })
    })
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
    question.title = "";
    question.answerList = [];
    question.sound = "";
    question.defaultMediaType = MediaType.text;
    question.picture = "";
    this.addQuestion(question);
    this.selectQuestion(question);
    this.typeOfForm = "creation";
    console.log(question)
  }

  createAndSelectNewQuiz() : void{
    const quiz = {} as Quiz;
    quiz.title = "";
    quiz.questionList = [];
    //this.quizList.push(quiz);
    //this.selectQuiz(quiz);
    this.typeOfForm = "creation";
    this.addQuiz(quiz);
  }

  addQuiz(quiz: Quiz): void {
    if(quiz.title === ""){
      quiz.title = "NOUVEAU QUIZ"
      
    }
    this.http.post<Quiz>(this.urlApi + '/quizzes', quiz).subscribe(quiz => {
        this.quizList.push(quiz);
        this.selectionQuizSubject.next(quiz);
        this.typeOfForm = "creation";
        this.router.navigate(["/quiz-form/"+ quiz.id + '/true']);
    });
  }


  getTypeOfForm(): string{
    return this.typeOfForm;
  }

  updateQuizList(quiz: Quiz): void {
    if(quiz.title ==='')
      quiz.title = 'Nouveau quiz';
    if (quiz.id !== undefined && quiz.id >= 0) {
      this.http.put<Quiz>(this.urlApi+'/quizzes/'+quiz.id,quiz).subscribe((q) => {
        const index = this.quizList.findIndex((e) => e.id === q.id);
        this.quizList[index] = q;
        this.quizListSubject.next(this.quizList);
      }
        
      );
    }
    else {
      if (quiz.questionList===undefined)
        quiz.questionList=[]
      this.http.post<Quiz>(this.urlApi+'/quizzes/',quiz).subscribe((q) => {
        this.quizList.push(q);
        this.quizListSubject.next(this.quizList);
      });
    }
  }

  removeQuiz(quiz: Quiz): void {
    const index = this.quizList.findIndex(q => q.id === quiz.id);
    if (quiz.id !== undefined && quiz.id >= 0) {
      console.log("remove quiz", quiz);
      this.http.delete<Quiz>(this.urlApi+'/quizzes/'+quiz.id).subscribe((e) => {
        console.log("delete", e);
      });
      const updatedQuizList = [...this.quizList];
      updatedQuizList.splice(index, 1);
      this.quizList = updatedQuizList;
      this.quizListSubject.next(this.quizList);
    }
  }

  resetSelectedQuiz(): void {
    console.log(this.typeOfForm)
    if(this.oldSelectedQuiz?.title === ''){
      this.removeQuiz(this.selectedQuiz as Quiz);
    }
    else{
      this.selectedQuiz = this.oldSelectedQuiz as Quiz;
      console.log(this.selectedQuiz);
      this.selectionQuizSubject.next(this.selectedQuiz as Quiz);
      this.updateQuizList(this.selectedQuiz as Quiz);
    }
  }


  getAllQuestionsOfAQuiz(quiz : Quiz){
    console.log(quiz);
    const url = `${this.urlApi}/questions/quiz/${quiz.id}`;
    const questions = this.http.get<Question[]>(url);
    console.log(questions);
    return questions ;
  }

}

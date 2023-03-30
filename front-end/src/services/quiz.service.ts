import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { QUIZZES_MUSIQUE } from "src/mocks/quiz.mock";
import { Quiz } from "src/models/quiz.model";


@Injectable({
    providedIn: 'root'
})
export class QuizService {
    private quizzes: Quiz[];
    private quizzesCopy: Quiz[];
    public startIndex: number = 0;
    public endIndex: number;
    public quizzes$: BehaviorSubject<Quiz[]>;
    public quizSelected$: Subject<Quiz> = new Subject<Quiz>();


    constructor() {
        this.quizzes = QUIZZES_MUSIQUE;
        this.quizzesCopy = QUIZZES_MUSIQUE;
        this.quizzes$ = new BehaviorSubject(this.quizzes);
        this.endIndex= this.quizzesCopy.length;
    }


    sortQuizList() {
        this.quizzes = this.quizzes.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          } else if (a.title > b.title) {
            return 1;
          } else {
            return 0;
          }
        });
        this.quizzes$.next(this.quizzes);
      }
    
      getThe6() {
        if(this.startIndex > this.endIndex) this.startIndex = 0;
        if(this.startIndex <0) this.startIndex = this.endIndex - (((this.endIndex/6) -Math.floor(this.endIndex/6))*6);
        if(this.startIndex+6 > this.endIndex){
          this.quizzes = this.quizzesCopy.slice(this.startIndex, this.endIndex);
        }else{
          this.quizzes = this.quizzesCopy.slice(this.startIndex, this.startIndex + 6);
        }
        this.quizzes$.next(this.quizzes);
    }
    
    showNextQuizzes() {
        this.startIndex += 6;
        this.getThe6();
    }
    
    showPreviousQuizzes() {
      this.startIndex -= 6;
      //if(this.startIndex < 0) this.startIndex = 0;
      this.getThe6();
    }
    
      getQuizById(id: number): Quiz | undefined {
        return this.quizzes.find((quiz) => quiz.id === id);
      }
    
      updateQuiz(quiz: Quiz) {
        console.log(quiz)
        let index = this.quizzes.findIndex((q) => q.id === quiz.id);
        console.log("index",index);
        this.quizzes[index] = quiz;
        console.log(this.quizzes)
        this.quizzes$.next(this.quizzes);
      }
    
      setSelected(id: number) {
        let q ={...this.quizzes.find((quiz) => quiz.id === id)} as Quiz;
        if(q != undefined)
          this.quizSelected$.next(q); 
      }
    }
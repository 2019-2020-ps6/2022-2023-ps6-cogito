import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';
import { QUIZ_LIST } from 'src/mocks/quiz-list.mock';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {

  public enumState = {
    GENERAL: 'general',
    QUESTIONS: 'questions'
  };

  public enumType ={
    CREATE: 'create',
    UPDATE: 'update'
  } 

  @Input()
  public type : string | undefined;

  @Input()
  public updatableQuiz : Quiz | undefined;

  public quiz : Quiz | undefined;

  public state = this.enumState.GENERAL;

  public quizForm: FormGroup = new FormGroup({});


  constructor(public quizService: QuizService, public formBuilder: FormBuilder) { 
    this.quizForm = this.formBuilder.group({
      name: [''],
      theme:['']
    });

  }


  ngOnInit() {
    if(this.type === undefined){
      this.type = this.enumType.CREATE;
    }

    if(this.type === this.enumType.CREATE){
      this.quizService.setSelected({} as Quiz);
    }

    if(this.type === this.enumType.UPDATE){
      this.quiz = this.updatableQuiz;
      this.quizService.setSelected(this.updatableQuiz?.id);
      this.quizForm = this.formBuilder.group({
        name: [this.quiz?.name],
        theme:[this.quiz?.theme]
      });
    }

    this.quizService.quizSelected$.subscribe((quiz: Quiz) => {
      this.quiz = quiz;
    });
  }

  addQuiz(){
    let questions = this.quiz?.questions || [];
    let id = this.quiz?.id || -1;
    this.quiz = this.quizForm.getRawValue() as Quiz;
    this.quiz.questions = questions;
    this.quiz.id = id;
    if(this.quiz){
      if(this.type === this.enumType.CREATE)
        this.quizService.addQuiz(this.quiz);
      if(this.type === this.enumType.UPDATE)
        this.quizService.updateQuiz(this.quiz);
    }
  }

  changeState(state: string){
    if(this.state === this.enumState.GENERAL){
      let questions = this.quiz?.questions || [];
      let id = this.quiz?.id || -1;

      this.quiz = this.quizForm.getRawValue() as Quiz; 
      this.quiz.questions = questions;
      this.quiz.id = id;
      this.quizService.setSelected(this.quiz);
    }
    this.quiz = this.quizService.quizSelected$.value;
    console.log(this.quiz);
    this.state = state;
  }





  

}

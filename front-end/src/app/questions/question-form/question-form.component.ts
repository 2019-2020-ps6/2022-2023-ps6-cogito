import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from 'src/models/quiz.model';
import { Question } from 'src/models/question.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  public quiz: Quiz = {} as Quiz;

  public questionForm: FormGroup = new FormGroup({});

  public question: Question = {} as Question;

  public type: string = 'create';


  constructor(private route: ActivatedRoute,public quizService: QuizService, public formBuilder: FormBuilder) {
    this.initializeQuestionForm();
  }

  ngOnInit() {
    this.quizService.quizSelected$.subscribe((quiz: Quiz) => {
      this.quiz = quiz;
    });
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id != null) {
      this.type = 'edit';
    }
    const quizId = this.route.snapshot.paramMap.get('quizId');
    if (quizId != null) {
      this.type = 'create';
    }
    console.log(this.quiz)
    this.question = this.quiz.questions.find(q => q.id == parseInt(id as string)) as Question;
    this.questionForm = this.formBuilder.group({
      label: [this.question.label, Validators.required],
      answers: this.formBuilder.array([])
    });
    this.question.answers.forEach(a => {
      this.answers.push(this.formBuilder.group({
        value: a.value,
        isCorrect: a.isCorrect,
      }));
    }
    );
  }

  private initializeQuestionForm(): void {
    this.questionForm = this.formBuilder.group({
      label: ['', Validators.required],
      answers: this.formBuilder.array([])
    });
  }

  createAnswer(): FormGroup {
    return this.formBuilder.group({
      value: '',
      isCorrect: false,
    });
  }

  get answers(): FormArray {
    if (this.questionForm)
      return this.questionForm.get('answers') as FormArray;
    else
      return this.formBuilder.array([]);
  }

  addAnswer(): void {
    this.answers.push(this.createAnswer());
  }

  addQuestion(): void {
    if(this.type==='create'){
      if (this.questionForm) {
        if (this.questionForm.valid) {
          const question = this.questionForm.getRawValue() as Question;
          question.id = this.quiz.questions.length + 1;
          if (this.quiz !== undefined) {
            if (this.quiz.questions === undefined) {
              this.quiz.questions = [];
            }
            this.quiz.questions.push(question);
          }
          this.initializeQuestionForm();
          this.quizService.setSelected(this.quiz);
        }
      }
    }
    else{
      if (this.questionForm) {
        if (this.questionForm.valid) {
          let id = this.route.snapshot.paramMap.get('id');
          const question = this.questionForm.getRawValue() as Question;
          question.id = parseInt(id as string);
          if (this.quiz !== undefined) {
            if (this.quiz.questions === undefined) {
              this.quiz.questions = [];
            }
            this.quiz.questions[this.quiz.questions.findIndex(q => q.id == this.question.id)] = question;
          }
          this.initializeQuestionForm();
          this.quizService.setSelected(this.quiz);
        }
      }
    }
  }

  deleteAnswer(index : number): void {
    console.log('delete answer', index);
    this.answers.removeAt(index);
    console.log(this.answers);
  }
}

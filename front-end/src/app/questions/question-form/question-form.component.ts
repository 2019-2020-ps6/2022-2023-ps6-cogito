import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from 'src/models/quiz.model';
import { Question } from 'src/models/question.model';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  public quiz: Quiz = {} as Quiz;

  public questionForm: FormGroup = new FormGroup({});


  constructor(public quizService: QuizService, public formBuilder: FormBuilder) {
    this.initializeQuestionForm();
  }

  ngOnInit() {
    this.quizService.quizSelected$.subscribe((quiz: Quiz) => {
      this.quiz = quiz;
    });
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
    if (this.questionForm) {
      if (this.questionForm.valid) {
        const question = this.questionForm.getRawValue() as Question;
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
}

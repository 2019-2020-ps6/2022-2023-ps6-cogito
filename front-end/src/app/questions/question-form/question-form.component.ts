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

  @Input()
  quiz: Quiz | undefined;

  public questionForm: FormGroup = new FormGroup({});

  constructor(public formBuilder: FormBuilder) {
    // Form creation
    this.initializeQuestionForm();
  }

  private initializeQuestionForm(): void {
    this.questionForm = this.formBuilder.group({
      label: ['', Validators.required],
      answers: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
  }

  get answers(): FormArray {
    if(this.questionForm)
      return this.questionForm.get('answers') as FormArray;
    else 
      return this.formBuilder.array([]);
  }

  private createAnswer(): FormGroup {
    return this.formBuilder.group({
      value: '',
      isCorrect: false,
    });
  }

  addAnswer(): void {
    this.answers.push(this.createAnswer());
  }

  addQuestion(): void {
    if(this.questionForm){
    if (this.questionForm.valid) {
      const question = this.questionForm.getRawValue() as Question;
      if(this.quiz)
        this.quiz.questions.push(question);
      this.initializeQuestionForm();
    }
  }
  }
}

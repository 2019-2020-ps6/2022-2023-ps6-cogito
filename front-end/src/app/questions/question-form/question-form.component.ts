import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';

import { AdminQuizService } from "src/services/admin-quiz.service";
import { Quiz } from "src/models/quiz.model";
import { QuizQuestion } from "src/models/quizQuestion.model";

@Component({
    selector: "app-questions-question-form",
    templateUrl: "./question-form.component.html",
    styleUrls: ["./question-form.component.scss"]
})
export class QuestionFormComponent implements OnInit {

  public quiz: Quiz = {} as Quiz;

  public questionForm: FormGroup = new FormGroup({});

  public question: QuizQuestion = {} as QuizQuestion;

  public type: string = 'create';


  constructor(private route: ActivatedRoute, public quizService: AdminQuizService, public formBuilder: FormBuilder) {
    this.initializeQuestionForm();
  }

    private initializeQuestionForm(): void {
        this.questionForm = this.formBuilder.group({
            label: ["", Validators.required],
            answers: this.formBuilder.array([])
        });
    }


  ngOnInit() {
    this.quizService.selectedQuiz$.subscribe((quiz: Quiz) => {
      this.quiz = quiz;
    });
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.type = 'edit';
    }
    const quizId = this.route.snapshot.paramMap.get('quizId');
    if (quizId != null) {
      this.type = 'create';
    }
    this.question = this.quiz.quizQuestionList.find(q => q.id == parseInt(id as string)) as QuizQuestion;
    this.questionForm = this.formBuilder.group({
      label: [this.question.title, Validators.required],
      answers: this.formBuilder.array([])
    });
    this.question.quizAnswerList.forEach(a => {
          this.answers.push(this.formBuilder.group({
            value: a.value,
            isCorrect: a.isCorrect,
          }));
        }
    );
  }

  get answers(): FormArray {
    if (this.questionForm)
      return this.questionForm.get('answers') as FormArray;
    else
      return this.formBuilder.array([]);
  }

    private createAnswer(): FormGroup {
        return this.formBuilder.group({
            value: "",
            isCorrect: false
        });
    }

    addAnswer(): void {
        this.answers.push(this.createAnswer());
    }

  addQuestion(): void {
    if(this.type==='create'){
      if (this.questionForm) {
        if (this.questionForm.valid) {
          const question = this.questionForm.getRawValue() as QuizQuestion;
          question.id = this.quiz.quizQuestionList.length + 1;
          this.quiz.quizQuestionList.push(question);
          this.initializeQuestionForm();
          this.quizService.setSelected(this.quiz.id);
        }
      }
    }
    else{
      if (this.questionForm) {
        if (this.questionForm.valid) {
          let id = this.route.snapshot.paramMap.get('id');
          const question = this.questionForm.getRawValue() as QuizQuestion;
          question.id = parseInt(id as string);
          if (this.quiz !== undefined) {
            if (this.quiz.quizQuestionList === undefined) {
              this.quiz.quizQuestionList = [];
            }
            this.quiz.quizQuestionList[this.quiz.quizQuestionList.findIndex(q => q.id == this.question.id)] = question;
          }
          this.initializeQuestionForm();
          this.quizService.setSelected(this.quiz.id);
        }
      }
    }
  }

  deleteAnswer(index : number): void {
    this.answers.removeAt(index);
  }
}

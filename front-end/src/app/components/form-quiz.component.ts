import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-form-quiz',
  templateUrl: './form-quiz.component.html',
  styleUrls: ['./form-quiz.component.css']
})
export class FormQuizComponent implements OnInit {
  quiz: Quiz = {
    id: 0,
    name: '',
    description: '',
    questions: []
  };

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.quiz.id === 0) {
      this.quizService.addQuiz(this.quiz);
    } else {
      this.quizService.updateQuiz(this.quiz);
    }
  }
}

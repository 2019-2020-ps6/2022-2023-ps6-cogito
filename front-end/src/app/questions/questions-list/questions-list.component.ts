import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from '../../../models/quiz.model';
import { Question } from '../../../models/question.model';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit{

  public quiz : Quiz | undefined;

  constructor(private quizService : QuizService) { }

  ngOnInit(): void {
    this.quizService.getSelectedQuiz().subscribe(quiz => {
      this.quiz = quiz;
    });
  }

  editQuestion(question: Question) {
    this.quizService.selectQuestion(question);
  }
}

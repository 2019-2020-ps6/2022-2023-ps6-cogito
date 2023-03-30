import { Component, OnInit } from '@angular/core';
import { AdminQuizService } from '../../../services/admin-quiz.service';
import { AdminQuiz } from '../../../models/admin-quiz.model';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './admin-quiz-list.component.html',
  styleUrls: ['./admin-quiz-list.component.scss']
})
export class AdminQuizListComponent implements OnInit {

  public quizList: AdminQuiz[] = [];

  constructor(public quizService: AdminQuizService) {
    this.quizService.quizzes$.subscribe((quizList) => {
      this.quizList = quizList;
    });
  }

  ngOnInit() {
  }

  quizSelected(selected: boolean) {
    console.log('event received from child:', selected);
  }

  deleteQuiz(quiz: AdminQuiz){
    this.quizService.deleteQuiz(quiz);
    console.log("The quiz ", quiz.name, " has been deleted");
  }
}
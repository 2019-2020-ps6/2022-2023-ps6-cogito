import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PATIENT_ANDREA } from 'src/mocks/patient.mock';
import { QUIZZES_ALL } from 'src/mocks/quiz.mock';
import { Quiz } from "../../../models/quiz.model";
import { Statistics } from "../../../models/statistics.model";


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit{
  stats!: Statistics;
  quizList: Quiz[] = [];

  constructor(private cdr: ChangeDetectorRef) {
    this.stats = PATIENT_ANDREA.statistics;

    this.initQuizzes();
    console.log(this.quizList);
  }

  initQuizzes() {
    this.quizList = [];
    for (let quiz of QUIZZES_ALL) {
      if (this.stats.playedQuizList.has(quiz.id)) {
        this.quizList.push(quiz);
      }
    }
  }

  deleteQuiz(quizId: number) {
    this.stats.playedQuizList.delete(quizId);
    this.initQuizzes();
    this.cdr.detectChanges();
  }

  ngOnInit() { }
}

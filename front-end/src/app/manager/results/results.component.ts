import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Patient } from 'src/models/patient.model';
import { PATIENT_ANDREA } from 'src/mocks/patient.mock';
import { QUIZZES_ALL } from 'src/mocks/quiz.mock';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit{
  Patient!: Patient;
  quizList: any[] = [];

  constructor(private cdr: ChangeDetectorRef) {
    this.Patient = PATIENT_ANDREA;
    // je veux faire pareil mais avec la méthode getQuizById du service quiz
    for (let quizId of this.Patient.quizIdList) {
      let index: number = QUIZZES_ALL.findIndex((quiz: any): boolean => quiz.id === quizId);
      if (index !== -1) {
        this.quizList.push(QUIZZES_ALL[index]);
      }
    }
    console.log(this.quizList);
  }

  deleteQuiz(quizId: number) {
    let index: number = this.Patient.quizIdList.findIndex((id: number): boolean => id === quizId);
    if (index !== -1) {
      this.Patient.quizIdList.splice(index, 1);
    }
    this.quizList = [];
    for (let quizId of this.Patient.quizIdList) {
      let index: number = QUIZZES_ALL.findIndex((quiz: any): boolean => quiz.id === quizId);
      if (index !== -1) {
        this.quizList.push(QUIZZES_ALL[index]);
      }
    }
    this.cdr.detectChanges();
  }

  ngOnInit() {
  }

}

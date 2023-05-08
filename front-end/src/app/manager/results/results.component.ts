import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/models/patient.model';
import { PatientService } from 'src/services/patient.service';
import { PATIENT_ANDREA } from 'src/mocks/patient.mock';
import { QUIZZES_ALL } from 'src/mocks/quiz.mock';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit{
  Patient!: Patient;
  quizList: any[] = [];

  constructor() {
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

  ngOnInit() {

  }

}
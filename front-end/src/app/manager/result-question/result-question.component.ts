import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PATIENT_ANDREA } from 'src/mocks/patient.mock';

@Component({
  selector: 'app-result-question',
  templateUrl: './result-question.component.html',
  styleUrls: ['./result-question.component.scss']
})
export class ResultQuestionComponent {
  id: any;  
  patient = PATIENT_ANDREA;
  questionStats: any;
  compteur: number;

  constructor(private route: ActivatedRoute) {
    this.compteur = 0;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
  });

  // je récupère le quiz correspondant à l'id :
  //mamma mia ça me fait chier tout ça
  if (this.patient.questionResult.get(this.id - 0) !== undefined) {
      this.questionStats = this.patient.questionResult.get(this.id - 0);
    }
  }
  addOne(): number {
    return this.compteur + 1;
  }

  setNumberToOne() {
    this.compteur = 1;
  }

  getStyle(result: boolean) {
    if (result === true) {
      return {'background-color': '#3bbb3b'};
    } else {
      return {'background-color': 'red'};
    }
  }
  
}

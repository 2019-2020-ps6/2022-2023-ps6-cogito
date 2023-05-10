import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PATIENT_ANDREA } from 'src/mocks/patient.mock';
import { QUIZZES_ALL } from 'src/mocks/quiz.mock';

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
  quiztitle: string = "";
  data: any;
  printMessage: string = "";
  falseCpt: number = 0;

  constructor(private route: ActivatedRoute) {
    this.compteur = 0;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
  });

    // Récupérer le titre du quiz id parmis tous les quiz du mock
    // Sans utiliser la méthode getQuizById du service quiz
    let index: number = QUIZZES_ALL.findIndex((quiz: any): boolean => quiz.id === this.id - 0);
    if (index !== -1) {
      this.quiztitle = QUIZZES_ALL[index].title;
    }

  // je récupère le quiz correspondant à l'id :
  if (this.patient.questionResult.get(this.id - 0) !== undefined) {
      this.questionStats = this.patient.questionResult.get(this.id - 0);
    }

    this.data = this.patient.questionResult.get(this.id - 0);
    if (this.data[this.data.length - 1] === false) {
      this.falseCpt++;
    } 
    if (this.data[this.data.length - 2] === false) {
      this.falseCpt++;
    }
    if (this.data[this.data.length - 3] === false) {
      this.falseCpt++;
    }
    if (this.data[this.data.length - 4] === false) {
      this.falseCpt++;
    }
    if (this.data[this.data.length - 5] === false) {
      this.falseCpt++;
    }
    if (this.falseCpt >= 4) {
      this.printMessage = "Il faudrait probablement supprimer le quiz pour ce patient";
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

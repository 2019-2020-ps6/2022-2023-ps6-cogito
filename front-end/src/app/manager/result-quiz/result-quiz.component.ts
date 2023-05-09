import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chart from 'chart.js/auto';
import { PATIENT_ANDREA } from 'src/mocks/patient.mock';
import { QUIZZES_ALL } from 'src/mocks/quiz.mock';
import { QuizService } from 'src/services/quiz.service';

@Component({
  selector: 'app-result-quiz',
  templateUrl: './result-quiz.component.html',
  styleUrls: ['./result-quiz.component.scss']
})
export class ResultQuizComponent implements OnInit {  
  id: any;
  patient = PATIENT_ANDREA;
  quiztitle = "";
  
  constructor(private route: ActivatedRoute, public quizService: QuizService) { }

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


  var myChart = new Chart("myChart", {
    type: 'line',
    data: {
        labels: ['Test1', 'Test2', 'Test3', 'Test4', 'Test5'],
        datasets: [{
            label: 'Résultats des 5 derniers tests pour le quiz ' + this.quiztitle,
            // je veux récupérer le tableau de nombres de la propriété quizResult du patient
            data: this.patient.quizResult.get(this.id - 0),
            backgroundColor:"#0196FD",
            borderColor: "#0196FD",
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true              
            }
        }
    }
  });
  }




}

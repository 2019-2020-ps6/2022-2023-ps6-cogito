import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PATIENT_ANDREA } from 'src/mocks/patient.mock';
import { QuizService } from 'src/services/quiz.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-result-quiz',
  templateUrl: './result-quiz.component.html',
  styleUrls: ['./result-quiz.component.scss']
})
export class ResultQuizComponent implements OnInit {  
  id: any;
  patient = PATIENT_ANDREA;
  quiztitle = "Titre du quiz";
  
  constructor(private route: ActivatedRoute, public quizService: QuizService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
  });

  // TODO : correction pour récupérer le titre du quiz

  const quiz = this.quizService.getQuizById(this.id);

  let titre = "Erreur";
  if (quiz !== undefined) {
    titre = quiz.title ?? "Titre du quiz";
  }
  this.quiztitle = titre;


  var myChart = new Chart("myChart", {
    type: 'line',
    data: {
        labels: ['Test1', 'Test2', 'Test3', 'Test4', 'Test5'],
        datasets: [{
            label: 'Résultats des 5 derniers tests',
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

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { QUIZZES_ALL } from "src/mocks/quiz.mock";
import { Chart } from "chart.js/auto";
import { PATIENT_ANDREA } from "../../../mocks/patient.mock";
import { STAT_GOOD_3 } from "../../../mocks/statistics.mock";
import { GameQuiz } from "../../../models/gameQuiz.model";
import { Patient } from "../../../models/patient.model";
import { Statistics } from "../../../models/statistics.model";
import { PatientService } from "../../../services/patient.service";

@Component({
    selector: "app-result-quiz",
    templateUrl: "./result-quiz.component.html",
    styleUrls: ["./result-quiz.component.scss"]
})
export class ResultQuizComponent implements OnInit {
    id: number = -1;
    patient: Patient;
    stats: Statistics;
    quiztitle = "";
    data: number[] = [];
    printMessage: boolean = false;

    constructor(private route: ActivatedRoute, private patientService: PatientService) {
        this.patient = PATIENT_ANDREA;
        this.stats = STAT_GOOD_3;

        this.patientService.selectedPatient$.subscribe((patient?: Patient): void => {
            if (patient !== undefined) {
                this.patient = patient;
                this.stats = STAT_GOOD_3;
            }
        });
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.id = params["id"];
        });

        // Récupérer le titre du quiz id parmis tous les quiz du mock
        // Sans utiliser la méthode getQuizById du service quiz
        let index: number = QUIZZES_ALL.findIndex((quiz: any): boolean => quiz.id === this.id);
        if (index !== -1) {
            this.quiztitle = QUIZZES_ALL[index].title;
        }

        // Récupérer le tableau de nombres de la propriété quizResult du patient
        this.data = this.getQuizResults();
        if (this.data[this.data.length - 1] < this.nbQuestions()/2) {
            this.printMessage = true;
        }

        var myChart = new Chart("myChart", {
            type: "line",
            data: {
                labels: ["Test1", "Test2", "Test3", "Test4", "Test5"],
                datasets: [{
                    label: "Résultats des 5 derniers tests pour le quiz " + this.quiztitle,
                    // je veux récupérer le tableau de nombres de la propriété quizResult du patient
                    data: this.data,
                    backgroundColor: "#0196FD",
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

    getQuizResults(): number[] {
        let results: number[] = [];
        for (let entry of this.stats.playedQuizList.entries()) {
            if (entry[0] == this.id) {
                let games: GameQuiz[] = entry[1];
                for (let gameQuiz of games) {
                    console.log("gameQuiz " + gameQuiz.quizId);
                    let score: number = this.getQuizPoints(gameQuiz)
                    results.push(score);
                }
            }
        }
        return results;
    }

    getQuizPoints(gameQuiz: GameQuiz): number {
        let score = 0;
        for (let gameQuestion of gameQuiz.questionList) {
            if (gameQuestion.selectedAnswer && gameQuestion.selectedAnswer.isCorrect) {
                score += 1;
            }
            console.log(gameQuestion.questionId + " " + gameQuestion.title + " : " + gameQuestion.selectedAnswer?.value + " | " + score)
        }
        return score;
    }

    private nbQuestions(): number {
        for (let entry of this.stats.playedQuizList.entries()) {
            if (entry[0] == this.id) {
                let games: GameQuiz[] = entry[1];
                this.nbQuestionsQuiz(games[0]);
            }
        }
        return 0;
    }

    private nbQuestionsQuiz(gameQuiz: GameQuiz): number {
        let questions: number[] = [];
        for (let question of gameQuiz.questionList) {
            if (questions.findIndex(value => value === question.questionId) === -1) {
                questions.push(question.questionId);
            }
        }
        return questions.length;
    }
}

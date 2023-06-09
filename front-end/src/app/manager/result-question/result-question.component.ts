import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PATIENT_ANDREA } from "src/mocks/patient.mock";
import { QUIZZES_ALL } from "src/mocks/quiz.mock";
import { STAT_GOOD_3 } from "../../../mocks/statistics.mock";
import { GameQuestion } from "../../../models/gameQuestion.model";
import { GameQuiz } from "../../../models/gameQuiz.model";
import { Patient } from "../../../models/patient.model";
import { Statistics } from "../../../models/statistics.model";
import { PatientService } from "../../../services/patient.service";

@Component({
    selector: "app-result-question",
    templateUrl: "./result-question.component.html",
    styleUrls: ["./result-question.component.scss"]
})
export class ResultQuestionComponent {
    id: number = -1;
    stats: Statistics = STAT_GOOD_3;
    questionStats: GameQuestion[] = [];
    compteur: number;
    quiztitle: string = "";
    data: any;
    printMessage: string = "";
    answers: any[] = [];
    answers2: any[] = [];
    answers3: any[] = [];

    constructor(private route: ActivatedRoute, private patientService: PatientService) {
        this.compteur = 0;
        this.patientService.selectedPatient$.subscribe((patient?: Patient): void => {
            if (patient !== undefined) {
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

        // je récupère le quiz correspondant à l'id :
        if (this.stats.playedQuizList.get(this.id) !== undefined) {
            let games: GameQuiz[] | undefined = this.stats.playedQuizList.get(this.id);
            if (games) {
                this.questionStats = games[games.length - 1].questionList;

                for (let i = 0; i < this.questionStats.length; i++) {
                    if (this.questionStats[i].selectedAnswer?.isCorrect != true) {
                        this.compteur++;
                    }
                }
            }
        }

        // this.data = games;
        // for (let i = 0; i < this.data.length; i++) {
        //     if (this.data[i] === false) {
        //         this.compteur++;
        //     }

        this.answers = [true, true, true, true, false, false];
        this.answers2 = [true, false, true, false, true, false];
        this.answers3 = [true, true, true, true, true, true];

        const randomInRange = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

        switch (randomInRange) {
            case 1 : 
                break;
            case 2 :
                this.answers = this.answers2;
                break;
            case 3 :
                this.answers = this.answers3;
                break;
        }


        if (this.compteur >= this.nbQuestions()/2) {
            this.printMessage = "Il faudrait probablement supprimer le quiz pour ce patient";
        }

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

    getStyle(element: boolean) {
        if (element === true) {
            return { "background-color": "#3bbb3b" };
        }
        else {
            return { "background-color": "red" };
        }
    }

}

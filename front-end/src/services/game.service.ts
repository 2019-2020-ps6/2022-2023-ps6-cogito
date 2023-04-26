import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { Answer } from "../models/answer.model";
import { Configuration } from "../models/configuration.model";
import { GameQuestion } from "../models/gameQuestion.model";
import { GameQuiz } from "../models/gameQuiz.model";
import { Patient } from "../models/patient.model";
import { MediaType, Question } from "../models/question.model";
import { Quiz } from "../models/quiz.model";
import { PatientService } from "./patient.service";
import { QuizService } from "./quiz.service";

@Injectable({
    providedIn: "root"
})
export class GameService {
    private gameQuiz?: GameQuiz;
    private selectedPatient?: Patient;
    private selectedQuiz?: Quiz;
    private questionList: GameQuestion[] = [];
    public currentQuestion$: BehaviorSubject<GameQuestion | undefined>
        = new BehaviorSubject<GameQuestion | undefined>(undefined);
    private currentQuestion?: GameQuestion;
    private currentInd: number = -1;

    constructor(private patientService: PatientService, private quizService: QuizService) {
        this.patientService.selectedPatient$.subscribe((patient?: Patient): void => {
            this.selectedPatient = patient;
            this.emptyGame();
        });

        this.quizService.selectedQuiz$.subscribe((quiz?: Quiz): void => {
            this.selectedQuiz = quiz;

            function gameQuizInit(quizId: number): GameQuiz {
                return {
                    id: -1,
                    quizId: quizId,
                    questionList: [],
                    startTime: new Date()
                };
            }

            if (quiz != undefined && this.selectedPatient != undefined) {
                if (this.gameQuiz == undefined || this.gameQuiz.quizId !== quiz.id) {
                    this.emptyGame();
                    this.getQuestionsList(this.selectedPatient.configuration, quiz);
                    this.gameQuiz = gameQuizInit(quiz.id);
                    this.nextQuestion();
                }
            }
        });
    }

    emptyGame(): void {
        this.gameQuiz = undefined;
        this.questionList = [];
        this.currentQuestion$.next(undefined);
        this.currentInd = -1;
    }

    getQuestionsList(configuration: Configuration, quiz: Quiz): void {
        let questionMedia: MediaType;
        let answerMedia: MediaType;
        let gameQuestion: GameQuestion;
        for (let question of quiz.questionList) {
            questionMedia = this.getQuestionMedia(configuration, question);
            answerMedia = this.getAnswerMedia(configuration, question);

            if (question.difficulty <= configuration.difficulty) {
                gameQuestion = {
                    id: -1,
                    questionId: question.id,
                    title: question.title,
                    answersMediaType: answerMedia,
                    answerList: this.getAnswerList(configuration.multipleAnswers, question), // faire fonction pour mettre les réponses acceptées par le patient
                    correcting: question.correcting,
                    hint: (configuration.hints) ? question.hint : undefined,
                    picture: (questionMedia === MediaType.picture) ? question.picture : undefined,
                    sound: (questionMedia === MediaType.sound) ? question.sound : undefined,
                    displayedHint: false
                };
                this.questionList.push(gameQuestion);
                this.fisherYatesShuffle(this.questionList);
            }
        }
    }

    getAnswerList(multipleAnswers: boolean, question: Question): Answer[] {
        let answerList: Answer[] = question.answerList;
        if (multipleAnswers || answerList.length == 2) {
            return question.answerList;
        }

        let resList: Answer[] = [];
        let array: number[] = [];
        for (let i = 0; i < answerList.length; i++) { // take the correct answer
            if (answerList[i].isCorrect) {
                resList.push(answerList[i]);
            }
            else {
                array.push(i);
            }
        }
        resList.push(answerList[this.randomAnswer(array)]); // Take the other answer randomly
        return resList;
    }

    randomAnswer(array: number[]): number {
        let rand: number = Math.random() * array.length | 0;
        return array[rand];
    }

    getQuestionMedia(patientConfig: Configuration, question: Question): MediaType {
        if (question.defaultMediaType === MediaType.picture) {
            if (patientConfig.pictures) {
                return MediaType.picture;
            }
            else if (question.sound != undefined && patientConfig.sounds) {
                return MediaType.sound;
            }
        }
        else if (question.defaultMediaType === MediaType.sound) {
            if (patientConfig.sounds) {
                return MediaType.sound;
            }
            else if (question.picture != undefined && patientConfig.pictures) {
                return MediaType.picture;
            }
        }
        return MediaType.text;
    }

    getAnswerMedia(patientConfig: Configuration, question: Question): MediaType {
        let answer: Answer = question.answerList[0];
        if (question.defaultAnswersMediaType === MediaType.picture) {
            if (patientConfig.pictures) {
                return MediaType.picture;
            }
            else if (answer.sound != undefined && patientConfig.sounds) {
                return MediaType.sound;
            }
        }
        else if (question.defaultAnswersMediaType === MediaType.sound) {
            if (patientConfig.sounds) {
                return MediaType.sound;
            }
            else if (answer.picture != undefined && patientConfig.pictures) {
                return MediaType.picture;
            }
        }
        return MediaType.text;
    }

    fisherYatesShuffle(array: any[]): void {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index
            let tmp: GameQuestion = array[i];
            array[i] = array[j];
            array[j] = tmp;
        }
    }

    nextQuestion(): void {
        if (!this.islastQuestion() && this.gameQuiz != undefined) {
            if (this.currentQuestion != undefined) {
                this.currentQuestion.endTime = new Date();
                this.gameQuiz.questionList.push(this.currentQuestion);
            }
            this.currentQuestion = this.questionList[++this.currentInd];
            this.fisherYatesShuffle(this.currentQuestion.answerList);
            this.currentQuestion.startTime = new Date();
            this.currentQuestion$.next(this.currentQuestion);
        }
    }

    islastQuestion(): boolean {
        return !(this.currentInd < this.questionList.length - 1);
    }
}
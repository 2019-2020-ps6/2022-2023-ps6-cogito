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
    public currentQuestion$: BehaviorSubject<GameQuestion | undefined>
        = new BehaviorSubject<GameQuestion | undefined>(undefined);
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

            if (quiz != undefined) {
                if (this.gameQuiz == undefined || this.gameQuiz.quizId !== quiz.id) {
                    this.currentInd = -1;
                    this.gameQuiz = gameQuizInit(quiz.id);
                    this.currentQuestion$.next(this.nextQuestion());
                }
            }
        });
    }

    nextQuestion(): GameQuestion | undefined {
        if (this.selectedPatient != undefined && this.selectedQuiz != undefined && this.gameQuiz != undefined) {
            let nbQuestions: number = this.selectedQuiz.questionList.length;

            while (this.currentInd < nbQuestions - 1) {
                let question: Question = this.selectedQuiz.questionList[++this.currentInd];
                let configuration: Configuration = this.selectedPatient.configuration;

                if (question.difficulty <= configuration.difficulty) {
                    let questionMedia: MediaType = this.getQuestionMedia(configuration, question);
                    let answerMedia: MediaType = this.getAnswerMedia(configuration, question);

                    return {
                        id: -1,
                        questionId: question.id,
                        title: question.title,
                        answersMediaType: answerMedia,
                        answerList: question.answerList,
                        correcting: question.correcting,
                        hint: (configuration.hints) ? question.hint : undefined,
                        picture: (questionMedia === MediaType.picture) ? question.picture : undefined,
                        sound: (questionMedia === MediaType.sound) ? question.sound : undefined,
                        startTime: new Date(),
                        displayedHint: false
                    };
                }
            }
        }
        return undefined;
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

    emptyGame(): void {
        this.gameQuiz = undefined;
        this.currentQuestion$.next(undefined);
        this.currentInd = -1;
    }
}
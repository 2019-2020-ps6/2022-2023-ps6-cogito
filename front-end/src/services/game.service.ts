import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

import { QUIZZES_ALL } from "../mocks/quiz.mock";
import { Answer } from "../models/answer.model";
import { Configuration } from "../models/configuration.model";
import { GameQuestion } from "../models/gameQuestion.model";
import { GameQuiz } from "../models/gameQuiz.model";
import { Patient } from "../models/patient.model";
import { MediaType, Question } from "../models/question.model";
import { Quiz } from "../models/quiz.model";
import { Statistics } from "../models/statistics.model";
import { PatientService } from "./patient.service";
import { QuizService } from "./quiz.service";
import { QuizSoundService } from "./gameSound.service";

@Injectable({
    providedIn: "root"
})
export class idList {
    private gameQuiz?: GameQuiz;
    private selectedPatient?: Patient;
    private selectedQuiz?: Quiz;
    private questionList: GameQuestion[] = [];
    public currentQuestion$: BehaviorSubject<GameQuestion | undefined>
        = new BehaviorSubject<GameQuestion | undefined>(undefined);
    private currentQuestion?: GameQuestion;
    private currentInd: number = -1;
    public resultQuiz: Map<GameQuestion, boolean> = new Map();

    constructor(private patientService: PatientService, private quizService: QuizService,
                private soundService: QuizSoundService, private router: Router) {
        this.patientService.selectedPatient$.subscribe((patient?: Patient): void => {
            if (this.router.url.includes("/game-page") && patient === undefined) {
                this.router.navigateByUrl("/patient-page");
            }

            this.selectedPatient = patient;

            this.emptyGame();
            if (this.selectedPatient != undefined && this.selectedPatient.stage >= 5) {
                if (this.selectedPatient.quizToPlayList.length === 0) {
                    // Add list of possible quizId from the patient
                    this.selectedPatient.quizToPlayList = this.selectedPatient.quizIdList.slice();
                }
                this.chooseQuiz();
            }
        });

        this.quizService.selectedQuiz$.subscribe((quiz?: Quiz): void => {
            this.selectedQuiz = quiz;

            if (quiz != undefined && this.selectedPatient != undefined) {
                console.log("gameQuiz: " + this.gameQuiz);
                if (this.gameQuiz == undefined || this.gameQuiz.quizId !== quiz.id) {
                    this.emptyGame();
                    this.gameQuizInit(quiz.id);
                    this.getQuestionsList(this.selectedPatient.configuration, quiz);
                    this.nextQuestion();
                }
            }
        });
    }

    private chooseQuiz(): void {
        if (this.selectedPatient != undefined) {
            let idList: number[] = this.selectedPatient.quizToPlayList;
            if (this.gameQuiz == undefined || this.gameQuiz.endTime != undefined) {
                let ind: number = Math.floor(Math.random() * idList.length);
                this.quizService.selectQuiz(this.findQuizFromAll(idList[ind]));
            }
        }
    }

    private findQuizFromAll(quizId: number): Quiz {
        let ind: number = QUIZZES_ALL.findIndex((quiz: Quiz): boolean => quiz.id === quizId);
        return QUIZZES_ALL[ind];
    }

    private gameQuizInit(quizId: number): void {
        this.gameQuiz = {
            id: -1,
            quizId: quizId,
            questionList: [],
            startTime: new Date()
        };
    }

    private emptyGame(): void {
        this.gameQuiz = undefined;
        this.questionList = [];
        this.currentQuestion$.next(undefined);
        this.currentInd = -1;
        this.resultQuiz = new Map();
    }

    private getQuestionsList(configuration: Configuration, quiz: Quiz): void {
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
                    answerList: this.getAnswerList(configuration.multipleAnswers, question),
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

    private getAnswerList(multipleAnswers: boolean, question: Question): Answer[] {
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

    private randomAnswer(array: number[]): number {
        let rand: number = Math.random() * array.length | 0;
        return array[rand];
    }

    private getQuestionMedia(patientConfig: Configuration, question: Question): MediaType {
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

    private getAnswerMedia(patientConfig: Configuration, question: Question): MediaType {
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

    private fisherYatesShuffle(array: any[]): void {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index
            let tmp: GameQuestion = array[i];
            array[i] = array[j];
            array[j] = tmp;
        }
    }

    nextQuestion(): void {
        if (!this.islastQuestion() && this.gameQuiz != undefined) {
            this.currentQuestion = this.questionList[++this.currentInd];
            this.fisherYatesShuffle(this.currentQuestion.answerList);
            this.currentQuestion.startTime = new Date();
            this.currentQuestion$.next(this.currentQuestion);
        }
    }

    checkAnswer(answer?: Answer, question?: GameQuestion): void {
        if (question) {
            question.selectedAnswer = answer;
            this.currentQuestion = question;
            this.currentQuestion.endTime = new Date();
            this.gameQuiz?.questionList.push(this.currentQuestion);

            if (answer) {
                this.resultQuiz.set(question, answer.isCorrect);

                if (!answer.isCorrect) {
                    let occur = this.questionList.reduce((acc, curr) => curr === question ? acc + 1 : acc, 0);
                    if (occur && occur < 2) {
                        this.questionList.push(question);
                    }
                }
            }
        }
    }

    finalScore(): Map<GameQuestion, boolean> {
        return this.resultQuiz;

    }

    playSound(soundUrl: string | undefined) {
        if (soundUrl) {
            this.soundService.playSound(soundUrl);
        }
    }

    stopSound() {
        this.soundService.stopAllSounds();
    }

    islastQuestion(): boolean {
        return !(this.currentInd < this.questionList.length - 1);
    }

    activeCorrWindow(): boolean {
        return this.selectedPatient?.configuration.correctAnswerWindow || this.selectedPatient?.configuration.falseAnswerWindow || false;
    }

    activeCorrTrueWindow(): boolean {
        return this.selectedPatient?.configuration.correctAnswerWindow || false;
    }

    activeCorrFalseWindow(): boolean {
        return this.selectedPatient?.configuration.falseAnswerWindow || false;
    }

    getConfig(): Configuration | undefined {
        return this.selectedPatient?.configuration || undefined;
    }

    finishGame(): void {
        if (this.currentQuestion != undefined && this.gameQuiz != undefined && this.selectedPatient != undefined) {
            // this.gameQuiz.questionList.push(this.currentQuestion);
            this.gameQuiz.endTime = new Date();

            let stats: Statistics = this.selectedPatient.statistics;
            if (stats.playedQuizList.has(this.gameQuiz.quizId)) {
                // @ts-ignore
                stats.playedQuizList.get(this.gameQuiz.quizId).push(this.gameQuiz);
            }
            else {
                stats.playedQuizList.set(this.gameQuiz.quizId, [this.gameQuiz]);
            }

            if (this.selectedPatient.quizToPlayList.length > 0) {
                this.removeQuizToPlay(this.gameQuiz.quizId, this.selectedPatient);
            }
            this.emptyGame();
            console.log("Game finished");
            if (this.selectedPatient.stage < 5) {
                this.router.navigateByUrl("/quiz-page");
            }
            else {
                this.router.navigateByUrl("/patient-page");
            }
        }
    }

    private removeQuizToPlay(quizId: number, patient: Patient): void {
        let idList: number[] = patient.quizToPlayList;
        if (idList.length <= 1) {
            idList = patient.quizIdList.slice(); // List of possible quizId from the patient
        }
        else {
            let quizList: number[] = [];
            for (let id of idList) {
                if (id !== quizId) {
                    quizList.push(id);
                }
            }
            idList = quizList;
        }
        patient.quizToPlayList = idList;
    }

    leaveGame(): void {
        if (this.selectedPatient === undefined || this.selectedPatient.stage >= 5) {
            this.router.navigateByUrl("/patient-page");
        }
        else {
            this.router.navigateByUrl("/quiz-page");
        }
    }

    selectQuestionForExample(question: Question): void {
        let q: GameQuestion = {
            id: question.id,
            questionId: question.id,
            title: question.title,
            answersMediaType: question.defaultAnswersMediaType,
            displayedHint: false,
            startTime: undefined,
            endTime: undefined,
            answerList: question.answerList,
            picture: question.picture,
            sound: question.sound,
        }
        this.currentQuestion$.next(q);
    }

}

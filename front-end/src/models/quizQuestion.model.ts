import { QuizAnswer } from "./quizAnswer.model";

export enum Difficulty {facile = 1, moyenne, difficile}

export interface QuizQuestion {
    id: number;
    title: string;
    difficulty: Difficulty;
    quizAnswerList: QuizAnswer[];
}
import { QuizAnswer } from "./quizAnswer.model";

export enum Difficulty {facile, moyen, difficile}

export interface QuizQuestion {
    id: number;
    title: string;
    difficulty: Difficulty;
    quizAnswerList: QuizAnswer[];
}
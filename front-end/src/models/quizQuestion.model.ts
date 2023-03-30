import { QuizAnswer } from "./quizAnswer.model";

export interface QuizQuestion {
    id: string;
    title: string;
    quizAnswerList: QuizAnswer[];
}
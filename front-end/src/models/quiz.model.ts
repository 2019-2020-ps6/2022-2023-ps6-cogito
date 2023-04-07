import { QuizQuestion } from "./quizQuestion.model";

export interface Quiz {
    id: number;
    title: string;
    picture: string;
    quizQuestionList: QuizQuestion[];
}
import { QuizQuestion } from "./quizQuestion.model";

export interface Quiz {
    id: number;
    title: string;
    image: string;
    quizQuestionList: QuizQuestion[];
}
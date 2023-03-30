import { QuizQuestion } from "./quizQuestion.model";

export interface Quiz {
    id: string;
    title: string;
    image: string;
    quizQuestionList: QuizQuestion[];
}
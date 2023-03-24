import { Quiz } from "./quiz.model";

export interface Theme {
    id: string;
    title: string;
    quizList: Quiz[];
}
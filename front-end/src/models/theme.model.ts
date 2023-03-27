import { Quiz } from "./quiz.model";

export interface Theme {
    id: string;
    title: string;
    image: string;
    quizList: Quiz[];
}
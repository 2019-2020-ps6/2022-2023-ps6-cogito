import { Quiz } from "./quiz.model";

export interface Theme {
    id: number;
    title: string;
    picture: string;
    quizzesList: Quiz[];
}
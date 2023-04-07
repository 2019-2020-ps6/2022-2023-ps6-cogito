import { Quiz } from "./quiz.model";

export interface Theme {
    id: number;
    title: string;
    picture: string;
    quizList: Quiz[];
}
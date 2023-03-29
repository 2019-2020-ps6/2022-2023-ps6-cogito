import { Quiz } from "./quiz.model";

export interface Theme {
    id: number;
    title: string;
    image: string;
    quizList: Quiz[];
}
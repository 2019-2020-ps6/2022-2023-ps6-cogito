import { Question } from "./question.model";

export interface Quiz {
    id: number;
    title: string;
    picture: string;
    questionList: Question[];
}
import { MediaType } from "./question.model";

export interface Answer {
    id: number;
    value: string;
    isCorrect: boolean;
    picture?: string;
    sound?: string;
}
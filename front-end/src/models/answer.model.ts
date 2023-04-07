import { MediaType } from "./question.model";

export interface Answer {
    id: number;
    value: string;
    isCorrect: boolean;
    defaultMediaType: MediaType;
    picture?: string;
    sound?: string;
}
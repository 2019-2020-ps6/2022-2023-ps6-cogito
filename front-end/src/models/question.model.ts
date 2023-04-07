import { Answer } from "./answer.model";
import { Correcting } from "./correcting.model";

export enum Difficulty { facile = 1, moyenne, difficile }

export enum MediaType { text, sound, picture }

export interface Question {
    id: number;
    title: string;
    difficulty: Difficulty;
    answerList: Answer[];
    defaultMediaType: MediaType;
    correcting: Correcting;
    hint?: string;
    picture?: string;
    sound?: string;
}
import { Difficulty } from "./question.model";

export interface Configuration {
    id: number;
    name: string;
    description: string;

    fontFamily: string;
    fontSize: number;

    pictures: boolean;
    sounds: boolean;
    multipleAnswers: boolean;
    hints: boolean;
    timeDisplayHint?: number;
    difficulty: Difficulty;
    againFalseQuestion: boolean;

    correctAnswerWindow: boolean;
    correctDescription: boolean;
    correctPicture: boolean;
    correctSound: boolean;

    wrongAnswerWindow: boolean;
    wrongDescription: boolean;
    wrongPicture: boolean;
    wrongSound: boolean;
}
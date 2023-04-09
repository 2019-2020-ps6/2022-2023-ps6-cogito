import { Difficulty } from "./question.model";

export interface Configuration {
    id: number;
    name: string;
    description: string;

    fontFamily: string;
    fontSize: number;
    theme: string;

    pictures: boolean;
    sounds: boolean;
    multipleAnswers: boolean;
    hints: boolean;
    timeDisplayHint?: number;
    difficulty: Difficulty;
    againFalseQuestion: boolean;

    correctAnswerWindow: boolean;
    correctDescription: boolean;
    correctImage: boolean;
    correctSound: boolean;

    falseAnswerWindow: boolean;
    falseDescription: boolean;
    falseImage: boolean;
    falseSound: boolean;
}
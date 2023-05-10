import { Configuration } from "../models/configuration.model";
import { Difficulty } from "../models/question.model";

let listeConfiguration: Configuration[] = [];



export const CONFIG_DEFAULT_3: Configuration = {
    id: 1,
    name: "Défaut stade 3",
    description: "Configuration par défaut pour le stade 3",

    fontFamily: "Roboto",
    fontSize: 16,
    theme: "Clair",

    pictures: true,
    sounds: true,
    multipleAnswers: true,
    hints: false,
    difficulty: Difficulty.difficile,
    againFalseQuestion: true,

    correctAnswerWindow: true,
    correctDescription: true,
    correctImage: true,
    correctSound: true,

    falseAnswerWindow: true,
    falseDescription: true,
    falseImage: true,
    falseSound: true
}

export const CONFIG_DEFAULT_4: Configuration = {
    id: 2,
    name: "Défaut stade 4",
    description: "Configuration par défaut pour le stade 4",

    fontFamily: "Century Gothic",
    fontSize: 20,
    theme: "Clair",

    pictures: true,
    sounds: true,
    multipleAnswers: true,
    hints: true,
    timeDisplayHint: 120,
    difficulty: Difficulty.moyenne,
    againFalseQuestion: true,

    correctAnswerWindow: true,
    correctDescription: true,
    correctImage: true,
    correctSound: true,

    falseAnswerWindow: true,
    falseDescription: true,
    falseImage: true,
    falseSound: true
}

export const CONFIG_DEFAULT_5: Configuration = {
    id: 3,
    name: "Défaut stade 5",
    description: "Configuration par défaut pour le stade 5",

    fontFamily: "Arial",
    fontSize: 22,
    theme: "Clair",

    pictures: true,
    sounds: true,
    multipleAnswers: false,
    hints: true,
    timeDisplayHint: 240,
    difficulty: Difficulty.facile,
    againFalseQuestion: false,

    correctAnswerWindow: true,
    correctDescription: false,
    correctImage: true,
    correctSound: true,

    falseAnswerWindow: false,
    falseDescription: false,
    falseImage: true,
    falseSound: true
}

listeConfiguration.push(CONFIG_DEFAULT_3, CONFIG_DEFAULT_4, CONFIG_DEFAULT_5);

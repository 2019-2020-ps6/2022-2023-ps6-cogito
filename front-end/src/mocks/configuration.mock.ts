import { Configuration } from "../models/configuration.model";
import { Difficulty } from "../models/question.model";

let listeConfiguration: Configuration[] = [];



export const CONFIG_DEFAULT_3: Configuration = {
    id: 1,
    name: "Défaut stade 3",
    description: "Configuration par défaut pour le stade 3",

    fontFamily: "Roboto",
    fontSize: 16,

    pictures: true,
    sounds: true,
    multipleAnswers: true,
    hints: false,
    difficulty: Difficulty.difficile,
    againFalseQuestion: true,

    correctAnswerWindow: true,
    correctDescription: true,
    correctPicture: true,
    correctSound: true,

    wrongAnswerWindow: true,
    wrongDescription: true,
    wrongPicture: true,
    wrongSound: true
}

export const CONFIG_DEFAULT_4: Configuration = {
    id: 2,
    name: "Défaut stade 4",
    description: "Configuration par défaut pour le stade 4",

    fontFamily: "Century Gothic",
    fontSize: 20,

    pictures: true,
    sounds: true,
    multipleAnswers: true,
    hints: true,
    timeDisplayHint: 120,
    difficulty: Difficulty.moyenne,
    againFalseQuestion: true,

    correctAnswerWindow: true,
    correctDescription: true,
    correctPicture: true,
    correctSound: true,

    wrongAnswerWindow: true,
    wrongDescription: true,
    wrongPicture: true,
    wrongSound: true
}

export const CONFIG_DEFAULT_5: Configuration = {
    id: 3,
    name: "Défaut stade 5",
    description: "Configuration par défaut pour le stade 5",

    fontFamily: "Arial",
    fontSize: 22,

    pictures: true,
    sounds: true,
    multipleAnswers: false,
    hints: true,
    timeDisplayHint: 240,
    difficulty: Difficulty.facile,
    againFalseQuestion: false,

    correctAnswerWindow: true,
    correctDescription: false,
    correctPicture: true,
    correctSound: true,

    wrongAnswerWindow: false,
    wrongDescription: false,
    wrongPicture: true,
    wrongSound: true
}

listeConfiguration.push(CONFIG_DEFAULT_3, CONFIG_DEFAULT_4, CONFIG_DEFAULT_5);

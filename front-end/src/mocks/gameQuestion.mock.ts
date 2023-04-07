import { GameQuestion } from "src/models/gameQuestion.model";
import { INS_Q1, INS_Q2, INS_Q3, INS_Q4, INS_Q5, INS_Q6 } from "./gameAnswer.mock";

export const QUESTION_INS1: GameQuestion = {
    id: 1,
    title: "Le carillon est composé de cloches",
    gameAnswerList: INS_Q1,
    startTime: undefined,
    endTime: undefined,
    sound: undefined,
    picture: undefined
};
export const QUESTION_INS2: GameQuestion = {
    id: 2,
    title: "Le violon possède ...",
    gameAnswerList: INS_Q2,
    startTime: undefined,
    endTime: undefined,
    sound: undefined,
    picture: undefined
};
export const QUESTION_INS3: GameQuestion = {
    id: 3,
    title: "La guitare est un instrument à ...",
    gameAnswerList: INS_Q3,
    startTime: undefined,
    endTime: undefined,
    sound: undefined,
    picture: undefined
};

export const QUESTION_INS4: GameQuestion = {
    id: 4,
    title: "Quel est ce instrument ?",
    gameAnswerList: INS_Q4,
    startTime: undefined,
    endTime: undefined,
    sound: undefined,
    picture: "https://www.scottomusique.com/615-large_default/accordeon-hohner-fun-musette.jpg"
};

export const QUESTION_INS5: GameQuestion = {
    id: 5,
    title: "Quel est le nom de cette chanson ?",
    gameAnswerList: INS_Q5,
    startTime: undefined,
    endTime: undefined,
    sound: "./assets/sounds/Lajavanaise.mp3",
    picture: undefined
};

export const QUESTION_INS6: GameQuestion = {
    id: 6,
    title: "Qui a chanter \"Ne me quitte pas\" ?",
    gameAnswerList: INS_Q6,
    startTime: undefined,
    endTime: undefined,
    sound: "./assets/sounds/neMeQuittePas.mp3",
    picture: undefined
};
export const QUESTIONS_INS: GameQuestion[] = [ QUESTION_INS1,QUESTION_INS2, QUESTION_INS3,QUESTION_INS4,QUESTION_INS5,QUESTION_INS6];
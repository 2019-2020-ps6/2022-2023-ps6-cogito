import { GameQuestion } from "src/models/gameQuestion.model";
import { INS_Q1, INS_Q2, INS_Q3 } from "src/mocks/gameAnswer.mock";

export const QUESTION_INS1: GameQuestion = {
    id: 1,
    title: "Le carillon est composé de cloches",
    gameAnswerList: INS_Q1,
    startTime: undefined,
    endTime: undefined
};
export const QUESTION_INS2: GameQuestion = {
    id: 2,
    title: "Le violon possède ...",
    gameAnswerList: INS_Q2,
    startTime: undefined,
    endTime: undefined
};
export const QUESTION_INS3: GameQuestion = {
    id: 3,
    title: "La guitare est un instrument à ...",
    gameAnswerList: INS_Q3,
    startTime: undefined,
    endTime: undefined
};
export const QUESTIONS_INS: GameQuestion[] = [QUESTION_INS1, QUESTION_INS2, QUESTION_INS3];
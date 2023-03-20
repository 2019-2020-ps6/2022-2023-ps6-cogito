import { GameQuestion } from "src/models/gameQuestion.modele";

export const QUESTION_INS1: GameQuestion = {
    id: "Ins1",
    title: "Le carillon est composé de cloches",
    answerList: [],
    startTime: undefined,
    endTime: undefined
};

export const QUESTION_INS2: GameQuestion = {
    id: "Ins2",
    title: "Le violon possède ...",
    answerList: [],
    startTime: undefined,
    endTime: undefined
};

export const QUESTIONS_INS: GameQuestion[] = [QUESTION_INS1, QUESTION_INS2, QUESTION_INS3, QUESTION_INS4];
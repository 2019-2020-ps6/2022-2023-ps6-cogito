import { GameQuestion } from "src/models/gameQuestion.modele";
import { INS_Q1_1, INS_Q1_2, INS_Q2_1, INS_Q2_2, INS_Q2_3, INS_Q3_1, INS_Q3_2, INS_Q3_3, INS_Q3_4 } from "src/mocks/gameAnswer.mock";

export const QUESTION_INS1: GameQuestion = {
    id: "Ins1",
    title: "Le carillon est composé de cloches",
    answerList: [INS_Q1_1, INS_Q1_2],
    startTime: undefined,
    endTime: undefined
};

export const QUESTION_INS2: GameQuestion = {
    id: "Ins2",
    title: "Le violon possède ...",
    answerList: [INS_Q2_1, INS_Q2_2, INS_Q2_3],
    startTime: undefined,
    endTime: undefined
};

export const QUESTION_INS3: GameQuestion = {
    id: "Ins3",
    title: "La guitare est un instrument à ...",
    answerList: [INS_Q3_1, INS_Q3_2, INS_Q3_3, INS_Q3_4],
    startTime: undefined,
    endTime: undefined
};

export const QUESTIONS_INS: GameQuestion[] = [QUESTION_INS1, QUESTION_INS2, QUESTION_INS3];
import { Question } from "src/models/question.modele";
import { ANSWER_INS1, ANSWER_INS2, ANSWER_INS3, ANSWER_INS4 } from "./answerList.mock";

export const QUESTION_INS1: Question = {
    id: "Ins1",
    label: "Le carillon est composé de cloches",
    answerList: ANSWER_INS1
};

export const QUESTION_INS2: Question = {
    id: "Ins2",
    label: "Le violon possède ...",
    answerList: ANSWER_INS2
};

export const QUESTION_INS3: Question = {
    id: "Ins3",
    label: "Quel est l'intrus ?",
    answerList: ANSWER_INS3
};

export const QUESTION_INS4: Question = {
    id: "Ins4",
    label: "La guitare est un instrument à ...",
    answerList: ANSWER_INS4
};

export const QUESTIONS_INS: Question[] = [QUESTION_INS1, QUESTION_INS2, QUESTION_INS3, QUESTION_INS4];
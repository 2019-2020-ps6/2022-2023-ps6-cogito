import { Difficulty, MediaType, Question } from "../models/question.model";
import { CHA_Q1, CHA_Q2, ECH_Q1, ECH_Q2, INS_Q1, INS_Q2, INS_Q3 } from "./answer.mock";

export const QUESTION_INS1: Question = {
    id: 1,
    title: "Le carillon est composé de cloches",
    difficulty: Difficulty.facile,
    answerList: INS_Q1,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text
}

export const QUESTION_INS2: Question = {
    id: 2,
    title: "Le violon possède ...",
    difficulty: Difficulty.moyenne,
    answerList: INS_Q2,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text
};

export const QUESTION_INS3: Question = {
    id: 3,
    title: "La guitare est un instrument à ...",
    difficulty: Difficulty.difficile,
    answerList: INS_Q3,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text
};

export const QUESTIONS_INS: Question[] = [QUESTION_INS1, QUESTION_INS2, QUESTION_INS3];


export const QUESTION_CHA1: Question = {
    id: 4,
    title: "Chanteur de \"Ne me quitte pas\" de 1959",
    difficulty: Difficulty.difficile,
    answerList: CHA_Q1,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text
};

export const QUESTION_CHA2: Question = {
    id: 5,
    title: "Nombre de personnes du groupe \"The Beatles\" dans les années 60",
    difficulty: Difficulty.moyenne,
    answerList: CHA_Q2,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text
};

export const QUESTIONS_CHA: Question[] = [QUESTION_CHA1, QUESTION_CHA2];


export const QUESTION_ECH1: Question = {
    id: 6,
    title: "Magnus Carlsen est champion du monde depuis...",
    difficulty: Difficulty.difficile,
    answerList: ECH_Q1,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text
};

export const QUESTION_ECH2: Question = {
    id: 7,
    title: "Combien y a-t-il de pionts pour une seule couleur ?",
    difficulty: Difficulty.moyenne,
    answerList: ECH_Q2,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text
}

export const QUESTIONS_ECH: Question[] = [QUESTION_ECH1, QUESTION_ECH2];
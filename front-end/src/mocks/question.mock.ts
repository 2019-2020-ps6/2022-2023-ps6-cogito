import { Difficulty, MediaType, Question } from "../models/question.model";
import { CHA_Q1, CHA_Q2, ECH_Q1, ECH_Q2, FOOT_Q1, FOOT_Q2, FOOT_Q3, INS_Q1, INS_Q2, INS_Q3, INS_Q4, RUGBY_Q1, RUGBY_Q2, RUGBY_Q3 } from "./answer.mock";
import { CORR_QUESTION_INS } from "./correcting.mock";

export const QUESTION_INS1: Question = {
    id: 1,
    title: "Le carillon est composé de cloches",
    difficulty: Difficulty.facile,
    answerList: INS_Q1,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text,
    correcting: CORR_QUESTION_INS
}

export const QUESTION_INS2: Question = {
    id: 2,
    title: "Le violon possède ...",
    difficulty: Difficulty.moyenne,
    answerList: INS_Q2,
    defaultMediaType: MediaType.picture,
    defaultAnswersMediaType: MediaType.text,
    picture:"https://www.guillaume-kessler.fr/wp-content/uploads/2017/11/violon-passion-tradition-mirecourt-trois-quart-carre.jpg",
    correcting: CORR_QUESTION_INS
};

export const QUESTION_INS3: Question = {
    id: 3,
    title: "La guitare est un instrument à ...",
    difficulty: Difficulty.difficile,
    answerList: INS_Q3,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text
};

export const QUESTION_INS4: Question = {
    id: 3,
    title: "Qui a chanté \"Ne me quitte pas\" ?",
    difficulty: Difficulty.facile,
    answerList: INS_Q4,
    defaultMediaType: MediaType.sound,
    defaultAnswersMediaType: MediaType.picture,
    sound:"/assets/sounds/neMeQuittePas.mp3"
};

export const QUESTIONS_INS: Question[] = [QUESTION_INS1, QUESTION_INS2, QUESTION_INS3,QUESTION_INS4];


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

export const QUESTION_FOOT1: Question = {
    id: 18,
    title: "Qui a gagné la coupe du monde 2018 ?",
    difficulty: Difficulty.facile,
    answerList: FOOT_Q1,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text
};

export const QUESTION_FOOT2: Question = {
    id: 19,
    title: "Qui a gagné la coupe du monde 2014 ?",
    difficulty: Difficulty.facile,
    answerList: FOOT_Q2,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text
};

export const QUESTION_FOOT3: Question = {
    id: 20,
    title: "Qui a gagné la coupe du monde 2010 ?",
    difficulty: Difficulty.facile,
    answerList: FOOT_Q3,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text
};

export const QUESTIONS_FOOT: Question[] = [QUESTION_FOOT1, QUESTION_FOOT2, QUESTION_FOOT3];


export const QUESTION_RUGBY1: Question = {
    id: 21,
    title: "Quel est le signe des anglais au rugby ?",
    difficulty: Difficulty.facile,
    answerList: RUGBY_Q1,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text
};

export const QUESTION_RUGBY2: Question = {
    id: 22,
    title: "Quel est l'équipe la plus titrée ?",
    difficulty: Difficulty.facile,
    answerList: RUGBY_Q2,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text
};

export const QUESTION_RUGBY3: Question = {
    id: 23,
    title: "Quel est le meilleur joueur de tous les temps ?",
    difficulty: Difficulty.facile,
    answerList: RUGBY_Q3,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text
};

export const QUESTIONS_RUGBY: Question[] = [QUESTION_RUGBY1, QUESTION_RUGBY2, QUESTION_RUGBY3];


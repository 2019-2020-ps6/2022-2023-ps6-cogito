import { CHA_Q1, CHA_Q2, ECH_Q1, INS_Q1, INS_Q2, INS_Q3 } from "src/mocks/quizAnswer.mock";
import { Difficulty, QuizQuestion } from "src/models/quizQuestion.model";

export const QUESTION_INS1: QuizQuestion = {
    id: 1,
    title: "Le carillon est composé de cloches",
    difficulty: Difficulty.facile,
    quizAnswerList: INS_Q1
};
export const QUESTION_INS2: QuizQuestion = {
    id: 2,
    title: "Le violon possède ...",
    difficulty: Difficulty.moyenne,
    quizAnswerList: INS_Q2
};
export const QUESTION_INS3: QuizQuestion = {
    id: 3,
    title: "La guitare est un instrument à ...",
    difficulty: Difficulty.difficile,
    quizAnswerList: INS_Q3
};
export const QUESTIONS_INS: QuizQuestion[] = [QUESTION_INS1, QUESTION_INS2, QUESTION_INS3];


export const QUESTION_CHA1: QuizQuestion = {
    id: 4,
    title: "Chanteur de \"Ne me quitte pas\" de 1959",
    difficulty: Difficulty.difficile,
    quizAnswerList: CHA_Q1
};
export const QUESTION_CHA2: QuizQuestion = {
    id: 5,
    title: "Nombre de personnes du groupe \"The Beatles\" dans les années 60",
    difficulty: Difficulty.moyenne,
    quizAnswerList: CHA_Q2
};
export const QUESTIONS_CHA: QuizQuestion[] = [QUESTION_CHA1, QUESTION_CHA2];


export const QUESTION_ECH1: QuizQuestion = {
    id: 6,
    title: "Magnus Carlsen est champion du monde depuis...",
    difficulty: Difficulty.difficile,
    quizAnswerList: ECH_Q1
};
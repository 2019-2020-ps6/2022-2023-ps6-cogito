import { QuizQuestion } from "src/models/quizQuestion.model";
import { CHA_Q1, CHA_Q2, INS_Q1, INS_Q2, INS_Q3 } from "src/mocks/quizAnswer.mock";

export const QUESTION_INS1: QuizQuestion = {
    id: "Q_Ins1",
    title: "Le carillon est composé de cloches",
    quizAnswerList: INS_Q1
};
export const QUESTION_INS2: QuizQuestion = {
    id: "Q_Ins2",
    title: "Le violon possède ...",
    quizAnswerList: INS_Q2
};
export const QUESTION_INS3: QuizQuestion = {
    id: "Q_Ins3",
    title: "La guitare est un instrument à ...",
    quizAnswerList: INS_Q3
};
export const QUESTIONS_INS: QuizQuestion[] = [QUESTION_INS1, QUESTION_INS2, QUESTION_INS3];


export const QUESTION_CHA1: QuizQuestion = {
    id: "Q_Cha1",
    title: "Chanteur de \"Ne me quitte pas\" de 1959",
    quizAnswerList: CHA_Q1
};
export const QUESTION_CHA2: QuizQuestion = {
    id: "Q_Cha2",
    title: "Nombre de personnes du groupe \"The Beatles\" dans les années 60",
    quizAnswerList: CHA_Q2
};
export const QUESTIONS_CHA: QuizQuestion[] = [QUESTION_CHA1, QUESTION_CHA2];
import { Quiz } from "src/models/quiz.model";
import { QUESTIONS_CHA, QUESTIONS_INS } from "./quizQuestion.mock";

export const QUIZ_INSTRUMENTS: Quiz = {
    id: "Ins1",
    title: "Instruments",
    quizQuestionList: QUESTIONS_INS
};
export const QUIZ_CHANSONS: Quiz = {
    id: "Cha1",
    title: "Chansons",
    quizQuestionList: QUESTIONS_CHA
};
export const QUIZZES_MUSIQUE: Quiz[] = [QUIZ_INSTRUMENTS, QUIZ_CHANSONS];
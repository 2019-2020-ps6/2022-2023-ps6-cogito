import { Quiz } from "src/models/quiz.model";
import { QUESTIONS_CHA, QUESTIONS_INS } from "./quizQuestion.mock";

export const QUIZ_INSTRUMENTS: Quiz = {
    id: "Ins1",
    title: "Instruments",
    image: "https://c8.alamy.com/compfr/2beygn2/collage-pile-de-divers-instruments-de-musique-guitare-electrique-violon-clavier-piano-bongo-batterie-tamburin-harmonica-trompette-goujon-a-percussion-en-laiton-2beygn2.jpg",
    quizQuestionList: QUESTIONS_INS
};
export const QUIZ_CHANSONS: Quiz = {
    id: "Cha1",
    title: "Chansons",
    image: "https://media2.ledevoir.com/images_galerie/nwd_897852_715446/image.jpg",
    quizQuestionList: QUESTIONS_CHA
};
export const QUIZZES_MUSIQUE: Quiz[] = [QUIZ_INSTRUMENTS, QUIZ_CHANSONS];
import { Quiz } from "src/models/quiz.model";
import { QUESTION_ECH1, QUESTIONS_CHA, QUESTIONS_INS } from "./quizQuestion.mock";

export const QUIZ_INSTRUMENTS: Quiz = {
    id: 1,
    title: "Instruments",
    image: "https://c8.alamy.com/compfr/2beygn2/collage-pile-de-divers-instruments-de-musique-guitare-electrique-violon-clavier-piano-bongo-batterie-tamburin-harmonica-trompette-goujon-a-percussion-en-laiton-2beygn2.jpg",
    quizQuestionList: QUESTIONS_INS
};
export const QUIZ_CHANSONS: Quiz = {
    id: 2,
    title: "Chansons",
    image: "https://media2.ledevoir.com/images_galerie/nwd_897852_715446/image.jpg",
    quizQuestionList: QUESTIONS_CHA
};
export const QUIZZES_MUSIQUE: Quiz[] = [QUIZ_INSTRUMENTS, QUIZ_CHANSONS];


export const QUIZ_ECHECS: Quiz = {
    id: 3,
    title: "Echecs",
    image: "https://static.fnac-static.com/multimedia/Images/55/55/B4/EB/15447125-1505-1540-1/tsp20200826152348/Jeu-d-echecs-magnetique-en-bois-pliable.jpg",
    quizQuestionList: [QUESTION_ECH1]
};
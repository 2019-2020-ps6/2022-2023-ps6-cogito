import { Quiz } from "../models/quiz.model";
import { QUESTIONS_CHA, QUESTIONS_ECH, QUESTIONS_FOOT, QUESTIONS_INS, QUESTIONS_RUGBY } from "./question.mock";
 
export const QUIZ_INSTRUMENTS: Quiz = {
    id: 1,
    title: "Instruments",
    picture: "https://c8.alamy.com/compfr/2beygn2/collage-pile-de-divers-instruments-de-musique-guitare-electrique-violon-clavier-piano-bongo-batterie-tamburin-harmonica-trompette-goujon-a-percussion-en-laiton-2beygn2.jpg",
    questionList: QUESTIONS_INS
};

export const QUIZ_CHANSONS: Quiz = {
    id: 2,
    title: "Chansons",
    picture: "https://media2.ledevoir.com/images_galerie/nwd_897852_715446/image.jpg",
    questionList: QUESTIONS_CHA
};

export const QUIZZES_MUSIQUE: Quiz[] = [QUIZ_INSTRUMENTS, QUIZ_CHANSONS];


export const QUIZ_ECHECS: Quiz = {
    id: 3,
    title: "Echecs",
    picture: "https://static.fnac-static.com/multimedia/Images/55/55/B4/EB/15447125-1505-1540-1/tsp20200826152348/Jeu-d-echecs-magnetique-en-bois-pliable.jpg",
    questionList: QUESTIONS_ECH
};

export const QUIZ_FOOT: Quiz = {
    id: 10,
    title: "Football",
    picture: "https://lempreintedigitale.com/wp-content/uploads/2022/03/clubs-foot-europeens-plus-suivis-reseaux-sociaux-min.jpeg",
    questionList: QUESTIONS_FOOT
};

export const QUIZ_RUGBY: Quiz = {
    id: 11,
    title: "Rugby",
    picture: "data:image/jpeg;base64,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",
    questionList: QUESTIONS_RUGBY
};



export const QUIZZES_SPORT: Quiz[] = [QUIZ_FOOT, QUIZ_ECHECS, QUIZ_RUGBY];




export const QUIZZES_ALL: Quiz[] = QUIZZES_MUSIQUE.concat(QUIZZES_SPORT);
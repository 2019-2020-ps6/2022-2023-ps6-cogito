import { Quiz } from "../models/quiz.model";
import { QUESTIONS_CHA, QUESTIONS_ECH, QUESTIONS_INS ,QUESTIONS_HYGIENE} from "./question.mock";
 
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

export const QUIZ_QUOTIDIEN: Quiz = {
    id: 4,
    title: "Hygiène",
    picture: "https://www.mmj.fr/sites/default/files/public/images/shutterstock_1661809672-laver_mains.jpg",
    questionList: QUESTIONS_HYGIENE
};

export const QUIZZES_SPORT: Quiz[] = [QUIZ_ECHECS];

export const QUIZZES_QUOTIDIEN: Quiz[] = [QUIZ_QUOTIDIEN];



export const QUIZZES_ALL: Quiz[] = QUIZZES_MUSIQUE.concat(QUIZZES_SPORT);
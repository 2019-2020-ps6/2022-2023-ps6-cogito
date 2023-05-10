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
    picture: "https://www.rugbyrama.fr/rugby/top-14/2018-2019/top-14-2018-2019-les-10-joueurs-les-mieux-payes-du-championnat_sto7254142/story.jpg",
    questionList: QUESTIONS_RUGBY
};



export const QUIZZES_SPORT: Quiz[] = [QUIZ_FOOT, QUIZ_ECHECS, QUIZ_RUGBY];




export const QUIZZES_ALL: Quiz[] = QUIZZES_MUSIQUE.concat(QUIZZES_SPORT);
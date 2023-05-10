import { Quiz } from "../models/quiz.model";
import { QUESTIONS_CHA, QUESTIONS_CINFR, QUESTIONS_CINHO, QUESTIONS_CUIS, QUESTIONS_ECH, QUESTIONS_GEO, QUESTIONS_INS } from "./question.mock";
 
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

export const QUIZZES_SPORT: Quiz[] = [QUIZ_ECHECS];

export const QUIZ_FRMOVIES: Quiz = {
    id: 4,
    title: "Ciné français",
    picture: "https://www.envies-de-france.fr/wp-content/uploads/2013/10/cine-fr.jpg",
    questionList: QUESTIONS_CINFR
};

export const QUIZ_HOCIN: Quiz = {
    id: 5,
    title: "Ciné hollywoodien",
    picture: "https://www.1001-deco-table.com/images/imagecache/400x400/jpg/20-Serviettes-en-papier-cinema-Hollywood-6634-99.jpg",
    questionList: QUESTIONS_CINHO
};


export const QUIZZES_CINEMA: Quiz[] = [QUIZ_FRMOVIES,QUIZ_HOCIN];

export const QUIZ_CUIS1: Quiz = {
    id: 6,
    title: "Cuisine",
    picture: "https://media.npr.org/assets/img/2023/01/31/gettyimages-1409934785_slide-8f8c963bab94a6f50ea21200559f4a551fda13f2-s1100-c50.jpg",
    questionList: QUESTIONS_CUIS
};

export const QUIZZES_CUISINE: Quiz[] = [QUIZ_CUIS1];

export const QUIZ_GEO1: Quiz = {
    id: 7,
    title: "Géographie",
    picture: "https://www.ifop.com/wp-content/uploads/2021/04/AdobeStock_2951056-scaled.jpeg",
    questionList: QUESTIONS_GEO
};

export const QUIZZES_GEO: Quiz[] = [QUIZ_GEO1];

export const QUIZZES_ALL: Quiz[] = QUIZZES_MUSIQUE.concat(QUIZZES_SPORT).concat(QUIZZES_CINEMA).concat(QUIZZES_CUISINE).concat(QUIZZES_GEO);
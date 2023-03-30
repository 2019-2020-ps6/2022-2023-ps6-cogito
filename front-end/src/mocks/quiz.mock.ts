import { Quiz } from "src/models/quiz.model";
import { QUESTIONS_CHA, QUESTIONS_INS } from "./quizQuestion.mock";

export const QUIZ_INSTRUMENTS: Quiz[] = [
    {
        id: 1,
        title: "Instruments1",
        image: "https://c8.alamy.com/compfr/2beygn2/collage-pile-de-divers-instruments-de-musique-guitare-electrique-violon-clavier-piano-bongo-batterie-tamburin-harmonica-trompette-goujon-a-percussion-en-laiton-2beygn2.jpg",
        quizQuestionList: QUESTIONS_INS
    },
    {
        id: 2,
        title: "Instruments2",
        image: "https://c8.alamy.com/compfr/2beygn2/collage-pile-de-divers-instruments-de-musique-guitare-electrique-violon-clavier-piano-bongo-batterie-tamburin-harmonica-trompette-goujon-a-percussion-en-laiton-2beygn2.jpg",
        quizQuestionList: QUESTIONS_INS
    },
    {
        id: 3,
        title: "Instruments3",
        image: "https://c8.alamy.com/compfr/2beygn2/collage-pile-de-divers-instruments-de-musique-guitare-electrique-violon-clavier-piano-bongo-batterie-tamburin-harmonica-trompette-goujon-a-percussion-en-laiton-2beygn2.jpg",
        quizQuestionList: QUESTIONS_INS
    }
]
export const QUIZ_CHANSONS: Quiz[] = [
    {
        id: 4,
        title: "Chansons1",
        image: "https://media2.ledevoir.com/images_galerie/nwd_897852_715446/image.jpg",
        quizQuestionList: QUESTIONS_CHA
    },
    {
        id: 5,
        title: "Chansons2",
        image: "https://media2.ledevoir.com/images_galerie/nwd_897852_715446/image.jpg",
        quizQuestionList: QUESTIONS_CHA
    },
    {
        id: 6,
        title: "Chansons3",
        image: "https://media2.ledevoir.com/images_galerie/nwd_897852_715446/image.jpg",
        quizQuestionList: QUESTIONS_CHA
    },
    {
        id: 7,
        title: "Chansons4",
        image: "https://media2.ledevoir.com/images_galerie/nwd_897852_715446/image.jpg",
        quizQuestionList: QUESTIONS_CHA
    },
]
export const QUIZZES_MUSIQUE: Quiz[] = QUIZ_INSTRUMENTS.concat(QUIZ_CHANSONS);
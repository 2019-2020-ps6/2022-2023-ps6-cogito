import { Quiz } from "../models/quiz.model";

export const QUIZ_INSTRUMENTS: Quiz = {
    id: 1,
    title: "Instruments",
    picture: "https://c8.alamy.com/compfr/2beygn2/collage-pile-de-divers-instruments-de-musique-guitare-electrique-violon-clavier-piano-bongo-batterie-tamburin-harmonica-trompette-goujon-a-percussion-en-laiton-2beygn2.jpg",
    questionList: [
        {
            id: 1,
            title: "Quel est le nom de cet instrument ?",
            difficulty: 1,
            answerList: [
                {
                    id: 1,
                    value: "Guitare",
                    isCorrect: false,
                    defaultMediaType: 1,
                },
                {
                    id: 2,
                    value: "Piano",
                    isCorrect: false,
                    defaultMediaType: 1,
                },
                {
                    id: 3,
                    value: "Violon",
                    isCorrect: true,
                    defaultMediaType: 1,
                },
                {
                    id: 4,
                    value: "Trompette",
                    isCorrect: false,
                    defaultMediaType: 1,
                }
            ],
            defaultMediaType: 1,
            correcting: {
                id: 1,
                description: "Cet instrument est à cordes",
                picture: "https://www.lesinrocks.com/wp-content/uploads/2019/10/violon.jpg",
                sound: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            },
            hint: "Cet instrument est à cordes",
            picture: "https://www.lesinrocks.com/wp-content/uploads/2019/10/violon.jpg",
            sound: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        },
        {
            id: 2,
            title: "Quel est le nom de cet instrument ?",
            difficulty: 1,
            answerList: [
                {
                    id: 1,
                    value: "Guitare",
                    isCorrect: false,
                    defaultMediaType: 1
                },
                {
                    id: 2,
                    value: "Piano",
                    isCorrect: true,
                    defaultMediaType: 1
                },
                {
                    id: 3,
                    value: "Violon",
                    isCorrect: false,
                    defaultMediaType: 1
                },
                {
                    id: 4,
                    value: "Trompette",
                    isCorrect: false,
                    defaultMediaType: 1
                }
            ],
            defaultMediaType: 1,
            correcting: {
                id: 1,
                description: "Cet instrument est à cordes",
                picture: "https://www.lesinrocks.com/wp-content/uploads/2019/10/violon.jpg",
                sound: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            },
            hint: "Cet instrument est à cordes",
            picture: "https://www.lesinrocks.com/wp-content/uploads/2019/10/violon.jpg",
            sound: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        }
    ]
};

export const QUIZ_CHANSONS: Quiz = {
    id: 2,
    title: "Chansons",
    picture: "https://media2.ledevoir.com/images_galerie/nwd_897852_715446/image.jpg",
    questionList: []
};

export const QUIZZES_MUSIQUE: Quiz[] = [QUIZ_INSTRUMENTS, QUIZ_CHANSONS];


export const QUIZ_ECHECS: Quiz = {
    id: 3,
    title: "Echecs",
    picture: "https://static.fnac-static.com/multimedia/Images/55/55/B4/EB/15447125-1505-1540-1/tsp20200826152348/Jeu-d-echecs-magnetique-en-bois-pliable.jpg",
    questionList: []
};

export const QUIZZES_SPORT: Quiz[] = [QUIZ_ECHECS];
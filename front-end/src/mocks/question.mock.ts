import { Difficulty, MediaType, Question } from "../models/question.model";


import { CHA_Q1, CHA_Q2, CINFR_Q1, CINFR_Q2, CINFR_Q3, CINHO_Q1, CINHO_Q2, CINHO_Q3, CUIS_Q1, CUIS_Q2, CUIS_Q3, GEO_Q1, GEO_Q2, GEO_Q3,
        ECH_Q1, ECH_Q2, FOOT_Q1, FOOT_Q2, FOOT_Q3, INS_Q1, INS_Q2, INS_Q3, INS_Q4, RUGBY_Q1, RUGBY_Q2, RUGBY_Q3, ECH_H1, ECH_H2, CALC_Q1, CALC_Q2 } from "./answer.mock";

import { CORR_QUESTION_INS, CORR_QUESTION_FOOT1, CORR_QUESTION_FOOT2, CORR_QUESTION_FOOT3, CORR_QUESTION_RUGBY1,
     CORR_QUESTION_RUGBY2, CORR_QUESTION_RUGBY3, CORR_QUESTION_HYGIENE1, CORR_CINFR2, CORR_QUESTION_HYGIENE2, CORR_QUESTION_CALCUL1, CORR_QUESTION_CALCUL2, CORR_QUESTION_INSTRUMENT3, CORR_QUESTION_INSTRUMENT2, CORR_QUESTION_INSTRUMENT1, CORR_QUESTION_INSTRUMENT4 } from "./correcting.mock";

export const QUESTION_INS1: Question = {
    id: 1,
    title: "Le carillon est composé de cloches",
    difficulty: Difficulty.facile,
    answerList: INS_Q1,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text,
    correcting: CORR_QUESTION_INSTRUMENT4
}

export const QUESTION_INS2: Question = {
    id: 2,
    title: "Le violon possède ...",
    difficulty: Difficulty.moyenne,
    answerList: INS_Q2,
    defaultMediaType: MediaType.picture,
    defaultAnswersMediaType: MediaType.text,
    picture:"https://www.guillaume-kessler.fr/wp-content/uploads/2017/11/violon-passion-tradition-mirecourt-trois-quart-carre.jpg",
    correcting: CORR_QUESTION_INSTRUMENT1,
    hint: "Ce n'est pas 3 !"
};

export const QUESTION_INS3: Question = {
    id: 3,
    title: "La guitare est un instrument à ...",
    difficulty: Difficulty.difficile,
    answerList: INS_Q3,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text,
    correcting: CORR_QUESTION_INSTRUMENT2
};

export const QUESTION_INS4: Question = {
    id: 3,
    title: "Qui a chanté \"Ne me quitte pas\" ?",
    difficulty: Difficulty.facile,
    answerList: INS_Q4,
    defaultMediaType: MediaType.sound,
    defaultAnswersMediaType: MediaType.picture,
    sound:"/assets/sounds/neMeQuittePas.mp3",
    correcting: CORR_QUESTION_INSTRUMENT3,
    hint: "Il est né en 1929"
};

export const QUESTIONS_INS: Question[] = [QUESTION_INS1, QUESTION_INS2, QUESTION_INS3,QUESTION_INS4];


export const QUESTION_CHA1: Question = {
    id: 4,
    title: "Chanteur de \"Ne me quitte pas\" de 1959",
    difficulty: Difficulty.difficile,
    answerList: CHA_Q1,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text,
    correcting: CORR_QUESTION_INSTRUMENT3,
    hint: "Il est né en 1929"
};

export const QUESTION_CHA2: Question = {
    id: 5,
    title: "Nombre de personnes du groupe \"The Beatles\" dans les années 60",
    difficulty: Difficulty.moyenne,
    answerList: CHA_Q2,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text,
    correcting: CORR_QUESTION_INS
};

export const QUESTIONS_CHA: Question[] = [QUESTION_CHA1, QUESTION_CHA2];


export const QUESTION_ECH1: Question = {
    id: 6,
    title: "Magnus Carlsen est champion du monde depuis...",
    difficulty: Difficulty.difficile,
    answerList: ECH_Q1,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text,
    correcting: CORR_QUESTION_INS
};

export const QUESTION_ECH2: Question = {
    id: 7,
    title: "Combien y a-t-il de pionts pour une seule couleur ?",
    difficulty: Difficulty.moyenne,
    answerList: ECH_Q2,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text,
    correcting: CORR_QUESTION_INS
}

export const QUESTIONS_ECH: Question[] = [QUESTION_ECH1, QUESTION_ECH2];

export const QUESTION_CINFR1: Question = {
    id: 8,
    title: "De quel film vient cette musique ?",
    difficulty: Difficulty.facile,
    answerList: CINFR_Q1,
    defaultMediaType: MediaType.sound,
    defaultAnswersMediaType: MediaType.text,
    sound: "/assets/sounds/laValseDAmelie.mp3",
    correcting: {
        id: 1,
        description: "C'était la valse d'Amélie Poulain, issu du film du même nom réalisé par Jean-Pierre Jeunet en 2001.",
        picture :"https://fr.web.img4.acsta.net/medias/nmedia/00/02/24/66/69198162_af.jpg",
    }
};

export const QUESTION_CINFR2: Question = {
    id: 9,
    title: "Pour quel film Jean Dujardin a-t-il reçu l'Oscar du meilleur acteur ?",
    difficulty: Difficulty.moyenne,
    answerList: CINFR_Q2,
    defaultMediaType: MediaType.picture,
    defaultAnswersMediaType: MediaType.text,
    hint: "C'est un film muet",
    picture: "https://www.culturequizz.com/wp-content/uploads/406f2a78e4f4fd9cb0b9b9244e6bda73-338x500.jpeg",
    correcting: CORR_CINFR2
}

export const QUESTION_CINFR3: Question = {
    id: 10,
    title: "Qui est le réalisateur des films Les Tuche ?",
    difficulty: Difficulty.moyenne,
    answerList: CINFR_Q3,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.picture,
    correcting: {
        id: 1,
        description: "Olivier Baroux a réalisé les films Les Tuche en 2011 et 2016.",
        picture: "https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2020-03/olivier.jpg"
    }
}

export const QUESTIONS_CINFR: Question[] = [QUESTION_CINFR1, QUESTION_CINFR2, QUESTION_CINFR3];

export const QUESTION_CINHO1: Question = {
    id: 11,
    title: "Dans quel film l'acteur Tom Hanks joue-t-il un rôle principal ?",
    difficulty: Difficulty.moyenne,
    answerList: CINHO_Q1,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text,
    correcting: CORR_QUESTION_INS
};

export const QUESTION_CINHO2: Question = {
    id: 12,
    title: "Qui est le réalisateur du film \"Les Dents de la Mer\" ?",
    difficulty: Difficulty.moyenne,
    answerList: CINHO_Q2,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text,
    correcting: CORR_QUESTION_INS
}

export const QUESTION_CINHO3: Question = {
    id: 13,
    title: "Quel film a remporté l'Oscar du meilleur film en 2021 ?",
    difficulty: Difficulty.moyenne,
    answerList: CINHO_Q3,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text,
    correcting: CORR_QUESTION_INS
}

export const QUESTIONS_CINHO: Question[] = [QUESTION_CINHO1, QUESTION_CINHO2, QUESTION_CINHO3];

export const QUESTION_CUIS1: Question = {
    id: 14,
    title: "Quel aliment est utilisé pour faire du guacamole ?",
    difficulty: Difficulty.facile,
    answerList: CUIS_Q1,
    defaultMediaType: MediaType.picture,
    defaultAnswersMediaType: MediaType.text,
    correcting: CORR_QUESTION_INS,
    picture:"https://i.pinimg.com/originals/13/84/38/13843840a650e28a0fc8eb974a8146b8.jpg"
};

export const QUESTION_CUIS2: Question = {
    id: 12,
    title: "Quelle est la base de la sauce béchamel ?",
    difficulty: Difficulty.facile,
    answerList: CUIS_Q2,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.picture,
    correcting: CORR_QUESTION_INS
}

export const QUESTION_CUIS3: Question = {
    id: 13,
    title: "Quel est ce repas japonais ?",
    difficulty: Difficulty.moyenne,
    answerList: CUIS_Q3,
    defaultMediaType: MediaType.picture,
    defaultAnswersMediaType: MediaType.text,
    correcting: CORR_QUESTION_INS,
    picture: "https://www.sushiyoshida.fr/wp-content/uploads/2022/08/menu-bento-b01-800x800.png"
}

export const QUESTIONS_CUIS: Question[] = [QUESTION_CUIS1, QUESTION_CUIS2, QUESTION_CUIS3];

export const QUESTION_GEO1: Question = {
    id: 14,
    title: "Dans quel pays se trouve le Taj Mahal ?",
    difficulty: Difficulty.moyenne,
    answerList: GEO_Q1,
    defaultMediaType: MediaType.picture,
    defaultAnswersMediaType: MediaType.text,
    correcting: CORR_QUESTION_INS,
    picture: "https://rochesfleuries.com/wp-content/uploads/2019/09/visite-taj-mahal-1024x683.jpg"
}

export const QUESTION_GEO2: Question = {
    id: 15,
    title: "Quel est le plus grand désert du monde ?",
    difficulty: Difficulty.moyenne,
    answerList: GEO_Q2,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text,
    correcting: CORR_QUESTION_INS
}

export const QUESTION_GEO3: Question = {
    id: 16,
    title: "Quel est le plus grand pays du monde par superficie ?",
    difficulty: Difficulty.facile,
    answerList: GEO_Q3,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text,
    correcting: CORR_QUESTION_INS
}


export const QUESTIONS_GEO: Question[] = [QUESTION_GEO1, QUESTION_GEO2, QUESTION_GEO3];

export const QUESTION_FOOT1: Question = {
    id: 18,
    title: "Qui a gagné la coupe du monde 2018 ?",
    difficulty: Difficulty.facile,
    answerList: FOOT_Q1,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text,
    correcting: CORR_QUESTION_FOOT1
};

export const QUESTION_FOOT2: Question = {
    id: 19,
    title: "Qui a gagné la coupe du monde 2014 ?",
    difficulty: Difficulty.facile,
    answerList: FOOT_Q2,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text,
    correcting: CORR_QUESTION_FOOT2
};

export const QUESTION_FOOT3: Question = {
    id: 20,
    title: "Qui a gagné la coupe du monde 2010 ?",
    difficulty: Difficulty.facile,
    answerList: FOOT_Q3,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text,
    correcting: CORR_QUESTION_FOOT3
};

export const QUESTIONS_FOOT: Question[] = [QUESTION_FOOT1, QUESTION_FOOT2, QUESTION_FOOT3];


export const QUESTION_RUGBY1: Question = {
    id: 21,
    title: "Quel est le signe des anglais au rugby ?",
    difficulty: Difficulty.facile,
    answerList: RUGBY_Q1,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text,
    correcting: CORR_QUESTION_RUGBY1
};

export const QUESTION_RUGBY2: Question = {
    id: 22,
    title: "Quel est l'équipe la plus titrée ?",
    difficulty: Difficulty.facile,
    answerList: RUGBY_Q2,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text,
    correcting: CORR_QUESTION_RUGBY2
};

export const QUESTION_RUGBY3: Question = {
    id: 23,
    title: "Quel est le meilleur joueur de tous les temps ?",
    difficulty: Difficulty.facile,
    answerList: RUGBY_Q3,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text,
    correcting: CORR_QUESTION_RUGBY3
};

export const QUESTIONS_RUGBY: Question[] = [QUESTION_RUGBY1, QUESTION_RUGBY2, QUESTION_RUGBY3];

export const QUESTION_HYGIENE1: Question = {
    id: 24,
    title: "Il faut se laver les mains avec ...",
    difficulty: Difficulty.facile,
    answerList: ECH_H1,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text,
    correcting: CORR_QUESTION_HYGIENE1
};

export const QUESTION_HYGIENE2: Question = {
    id: 25,
    title: "Quand doit on se laver les mains ?",
    difficulty: Difficulty.facile,
    answerList: ECH_H2,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text,
    correcting: CORR_QUESTION_HYGIENE2
};  
  
export const QUESTIONS_HYGIENE: Question[] = [QUESTION_HYGIENE1,QUESTION_HYGIENE2];

export const QUESTION_CALCUL1: Question = {
    id: 26,
    title: "3 + 3 = ?",
    difficulty: Difficulty.facile,
    answerList: CALC_Q1,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text,
    correcting: CORR_QUESTION_CALCUL1
};

export const QUESTION_CALCUL2: Question = {
    id: 27,
    title: "3 x 9 = ?",
    difficulty: Difficulty.moyenne,
    answerList: CALC_Q2,
    defaultMediaType: MediaType.text,
    defaultAnswersMediaType: MediaType.text,
    correcting: CORR_QUESTION_CALCUL2
};  
  
export const QUESTIONS_CALCUL: Question[] = [QUESTION_CALCUL1,QUESTION_CALCUL2];
import { Answer } from "../models/answer.model";

export const INS_Q1_1: Answer = {
    id: 1,
    value: "vrai",
    isCorrect: true
};

export const INS_Q1_2: Answer = {
    id: 2,
    value: "faux",
    isCorrect: false
};

export const INS_Q1: Answer[] = [INS_Q1_1, INS_Q1_2];


export const INS_Q2_1: Answer = {
    id: 3,
    value: "3 cordes",
    isCorrect: false
};

export const INS_Q2_2: Answer = {
    id: 4,
    value: "4 cordes",
    isCorrect: true
};

export const INS_Q2_3: Answer = {
    id: 5,
    value: "5 cordes",
    isCorrect: false
};

export const INS_Q2: Answer[] = [INS_Q2_1, INS_Q2_2, INS_Q2_3];


export const INS_Q3_1: Answer = {
    id: 6,
    value: "cuivre",
    isCorrect: false
};

export const INS_Q3_2: Answer = {
    id: 7,
    value: "vent",
    isCorrect: false
};

export const INS_Q3_3: Answer = {
    id: 8,
    value: "cordes",
    isCorrect: true
};

export const INS_Q3_4: Answer = {
    id: 9,
    value: "percussion",
    isCorrect: false
};

export const INS_Q3: Answer[] = [INS_Q3_1, INS_Q3_2, INS_Q3_3, INS_Q3_4];

export const INS_Q4_1: Answer = {
    id: 6,
    value: "Jacques Brel",
    isCorrect: true,
    picture: "https://www.melody.tv/wp-content/uploads/2021/10/jacques-brel61696dee9f9b6-1024x576.jpeg"
};

export const INS_Q4_2: Answer = {
    id: 7,
    value: "Georges Brassens",
    isCorrect: false,
    picture: "https://images.rtl.fr/~c/2000v2000/rtl/www/1234639-le-chanteur-francais-georges-brassens-chez-lui.jpg"

};

export const INS_Q4: Answer[] = [INS_Q4_1, INS_Q4_2];


export const CHA_Q1_1: Answer = {
    id: 10,
    value: "Claude François",
    isCorrect: false
};

export const CHA_Q1_2: Answer = {
    id: 11,
    value: "Céline Dion",
    isCorrect: false
};

export const CHA_Q1_3: Answer = {
    id: 12,
    value: "Jacques Brel",
    isCorrect: true
};

export const CHA_Q1_4: Answer = {
    id: 13,
    value: "Wyclef Jean",
    isCorrect: false
};

export const CHA_Q1: Answer[] = [CHA_Q1_1, CHA_Q1_2, CHA_Q1_3, CHA_Q1_4];


export const CHA_Q2_1: Answer = {
    id: 14,
    value: "5",
    isCorrect: false
};

export const CHA_Q2_2: Answer = {
    id: 15,
    value: "4",
    isCorrect: true
};

export const CHA_Q2_3: Answer = {
    id: 16,
    value: "3",
    isCorrect: false
};

export const CHA_Q2_4: Answer = {
    id: 17,
    value: "2",
    isCorrect: false
};

export const CHA_Q2: Answer[] = [CHA_Q2_1, CHA_Q2_2, CHA_Q2_3, CHA_Q2_4];


export const ECH_Q1_1: Answer = {
    id: 18,
    value: "2013",
    isCorrect: true
};

export const ECH_Q1_2: Answer = {
    id: 19,
    value: "2015",
    isCorrect: false
};

export const ECH_Q1_3: Answer = {
    id: 20,
    value: "2017",
    isCorrect: false
};

export const ECH_Q1_4: Answer = {
    id: 21,
    value: "2019",
    isCorrect: false
};

export const ECH_Q1: Answer[] = [ECH_Q1_1, ECH_Q1_2, ECH_Q1_3, ECH_Q1_4];


export const ECH_Q2_1: Answer = {
    id: 22,
    value: "6",
    isCorrect: false
};

export const ECH_Q2_2: Answer = {
    id: 23,
    value: "8",
    isCorrect: true
};

export const ECH_Q2_3: Answer = {
    id: 24,
    value: "10",
    isCorrect: false
};

export const ECH_Q2: Answer[] = [ECH_Q2_1, ECH_Q2_2, ECH_Q2_3];

export const FOOT_Q1_1: Answer = {
    id: 50,
    value: "France",
    isCorrect: true,
};

export const FOOT_Q1_2: Answer = {
    id: 51,
    value: "Allemagne",
    isCorrect: false,
};

export const FOOT_Q1_3: Answer = {
    id: 52,
    value: "Espagne",
    isCorrect: false,
};

export const FOOT_Q1_4: Answer = {
    id: 53,
    value: "Italie",
    isCorrect: false,
};

export const FOOT_Q1_5: Answer = {
    id: 54,
    value: "Portugal",
    isCorrect: false,
};

export const FOOT_Q1_6: Answer = {
    id: 55,
    value: "Allemagne",
    isCorrect: true,
};

export const FOOT_Q1_7: Answer = {
    id: 56,
    value: "Espagne",
    isCorrect: true,
};

export const FOOT_Q1: Answer[] = [FOOT_Q1_1, FOOT_Q1_2, FOOT_Q1_3, FOOT_Q1_4];

export const FOOT_Q2: Answer[] = [FOOT_Q1_5, FOOT_Q1_6, FOOT_Q1_4, FOOT_Q1_3];

export const FOOT_Q3: Answer[] = [FOOT_Q1_7, FOOT_Q1_2, FOOT_Q1_5, FOOT_Q1_4];


export const RUGBY_Q1_1: Answer = {
    id: 57,
    value: "La rose",
    isCorrect: true,
};

export const RUGBY_Q1_2: Answer = {
    id: 58,
    value: "Le coq",
    isCorrect: false,
};

export const RUGBY_Q1_3: Answer = {
    id: 59,
    value: "Le dragon",
    isCorrect: false,
};

export const RUGBY_Q1_4: Answer = {
    id: 60,
    value: "Le lion",
    isCorrect: false,
};

export const RUGBY_Q1: Answer[] = [RUGBY_Q1_1, RUGBY_Q1_2, RUGBY_Q1_3, RUGBY_Q1_4];

export const RUGBY_Q2_1: Answer = {
    id: 61,
    value: "La France",
    isCorrect: false,
};

export const RUGBY_Q2_2: Answer = {
    id: 62,
    value: "L'Angleterre",
    isCorrect: false,
};

export const RUGBY_Q2_3: Answer = {
    id: 63,
    value: "L'Afrique du Sud",
    isCorrect: false,
};

export const RUGBY_Q2_4: Answer = {
    id: 64,
    value: "La Nouvelle-Zélande",
    isCorrect: true,
};

export const RUGBY_Q2: Answer[] = [RUGBY_Q2_1, RUGBY_Q2_2, RUGBY_Q2_3, RUGBY_Q2_4];

export const RUGBY_Q3_1: Answer = {
    id: 65,
    value: "Jonah Lomu",
    isCorrect: true,
};

export const RUGBY_Q3_2: Answer = {
    id: 66,
    value: "Richie McCaw",
    isCorrect: false,
};

export const RUGBY_Q3_3: Answer = {
    id: 67,
    value: "Dan Carter",
    isCorrect: false,
};

export const RUGBY_Q3_4: Answer = {
    id: 68,
    value: "Sebastien Chabal",
    isCorrect: false,
};

export const RUGBY_Q3: Answer[] = [RUGBY_Q3_1, RUGBY_Q3_2, RUGBY_Q3_3, RUGBY_Q3_4];
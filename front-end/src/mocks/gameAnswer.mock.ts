import { GameAnswer } from "src/models/gameAnswer.model";

export const INS_Q1_1: GameAnswer = {
    id: 1,
    value: "VRAI",
    isCorrect: true,
    picture: undefined
}
export const INS_Q1_2: GameAnswer = {
    id: 2,
    value: "FAUX",
    isCorrect: false,
    picture: undefined
};
export const INS_Q1: GameAnswer[] = [INS_Q1_1, INS_Q1_2];


export const INS_Q2_1: GameAnswer = {
    id: 3,
    value: "3 CORDES",
    isCorrect: false,
    picture: undefined
}
export const INS_Q2_2: GameAnswer = {
    id: 4,
    value: "4 CORDES",
    isCorrect: true,
    picture: undefined
}
export const INS_Q2_3: GameAnswer = {
    id: 5,
    value: "5 CORDES",
    isCorrect: false,
    picture: undefined
}
export const INS_Q2: GameAnswer[] = [INS_Q2_1, INS_Q2_2, INS_Q2_3];

export const INS_Q3_1: GameAnswer = {
    id: 6,
    value: "CUIVRE",
    isCorrect: false,
    picture: undefined
}
export const INS_Q3_2: GameAnswer = {
    id: 7,
    value: "VENT",
    isCorrect: false,
    picture: undefined
}
export const INS_Q3_3: GameAnswer = {
    id: 8,
    value: "CORDES",
    isCorrect: true,
    picture: undefined
}
export const INS_Q3_4: GameAnswer = {
    id: 9,
    value: "PERCUSSION",
    isCorrect: false,
    picture: undefined
};
export const INS_Q3: GameAnswer[] = [INS_Q3_1, INS_Q3_2, INS_Q3_3, INS_Q3_4];

export const INS_Q4_1: GameAnswer = {
    id: 10,
    value: "ORGUE",
    isCorrect: false,
    picture: undefined
}
export const INS_Q4_2: GameAnswer = {
    id: 11,
    value: "BARYTON",
    isCorrect: false,
    picture: undefined
}
export const INS_Q4_3: GameAnswer = {
    id: 12,
    value: "ACORDEON",
    isCorrect: true,
    picture: undefined
}
export const INS_Q4: GameAnswer[] = [INS_Q4_1, INS_Q4_2, INS_Q4_3];

export const INS_Q5_1: GameAnswer = {
    id: 13,
    value: "MON AMOUR",
    isCorrect: false,
    picture: undefined
}
export const INS_Q5_2: GameAnswer = {
    id: 14,
    value: "LA JAVANAISE",
    isCorrect: true,
    picture: undefined
}
export const INS_Q5: GameAnswer[] = [INS_Q5_1, INS_Q5_2];

export const INS_Q6_1: GameAnswer = {
    id: 15,
    value: "JAQUES BREL",
    isCorrect: true,
    picture: "https://www.melody.tv/wp-content/uploads/2021/10/jacques-brel61696dee9f9b6-1024x576.jpeg"
}
export const INS_Q6_2: GameAnswer = {
    id: 16,
    value: "GEORGES BRASSENS",
    isCorrect: false,
    picture: "https://images.rtl.fr/~c/2000v2000/rtl/www/1234639-le-chanteur-francais-georges-brassens-chez-lui.jpg"
}
export const INS_Q6: GameAnswer[] = [INS_Q6_1, INS_Q6_2];
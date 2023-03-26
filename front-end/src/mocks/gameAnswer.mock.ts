import { GameAnswer } from "src/models/gameAnswer.model";

export const INS_Q1_1: GameAnswer = {
    id: 1,
    value: "vrai",
    isCorrect: true
};
export const INS_Q1_2: GameAnswer = {
    id: 2,
    value: "faux",
    isCorrect: false
};
export const INS_Q1: GameAnswer[] = [INS_Q1_1, INS_Q1_2];


export const INS_Q2_1: GameAnswer = {
    id: 3,
    value: "3 cordes",
    isCorrect: false
};
export const INS_Q2_2: GameAnswer = {
    id: 4,
    value: "4 cordes",
    isCorrect: true
};
export const INS_Q2_3: GameAnswer = {
    id: 5,
    value: "5 cordes",
    isCorrect: false
};
export const INS_Q2: GameAnswer[] = [INS_Q2_1, INS_Q2_2, INS_Q2_3];


export const INS_Q3_1: GameAnswer = {
    id: 6,
    value: "cuivre",
    isCorrect: false
};
export const INS_Q3_2: GameAnswer = {
    id: 7,
    value: "vent",
    isCorrect: false
};
export const INS_Q3_3: GameAnswer = {
    id: 8,
    value: "cordes",
    isCorrect: true
};
export const INS_Q3_4: GameAnswer = {
    id: 9,
    value: "percussion",
    isCorrect: false
};
export const INS_Q3: GameAnswer[] = [INS_Q3_1, INS_Q3_2, INS_Q3_3, INS_Q3_4];
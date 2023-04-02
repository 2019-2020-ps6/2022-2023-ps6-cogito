import { GameQuestion } from "src/models/gameQuestion.model";
import { INS_Q1_1, INS_Q1_2, INS_Q2_1, INS_Q2_2, INS_Q2_3, INS_Q3_1, INS_Q3_2, INS_Q3_3, INS_Q3_4, INS_Q4_1, INS_Q4_2, INS_Q4_3, INS_Q5_1, INS_Q5_2, INS_Q6_1, INS_Q6_2 } from "src/mocks/gameAnswer.mock";

export const QUESTION_INS1: GameQuestion = {
    id: "Ins1",
    title: "Le carillon est composé de cloches",
    answerList: [INS_Q1_1, INS_Q1_2],
    startTime: undefined,
    endTime: undefined,
    sound: undefined,
    picture: undefined
};

export const QUESTION_INS2: GameQuestion = {
    id: "Ins2",
    title: "Le violon possède ...",
    answerList: [INS_Q2_1, INS_Q2_2, INS_Q2_3],
    startTime: undefined,
    endTime: undefined,
    sound: undefined,
    picture: undefined
};

export const QUESTION_INS3: GameQuestion = {
    id: "Ins3",
    title: "La guitare est un instrument à ...",
    answerList: [INS_Q3_1, INS_Q3_2, INS_Q3_3, INS_Q3_4],
    startTime: undefined,
    endTime: undefined,
    sound: undefined,
    picture: undefined
};

export const QUESTION_INS4: GameQuestion = {
    id: "Ins4",
    title: "Quel est ce instrument ?",
    answerList: [INS_Q4_1, INS_Q4_2, INS_Q4_3],
    startTime: undefined,
    endTime: undefined,
    sound: undefined,
    picture: "https://www.scottomusique.com/615-large_default/accordeon-hohner-fun-musette.jpg"
};

export const QUESTION_INS5: GameQuestion = {
    id: "Ins5",
    title: "Quel est le nom de cette chanson ?",
    answerList: [INS_Q5_1, INS_Q5_2],
    startTime: undefined,
    endTime: undefined,
    sound: "./assets/sounds/Lajavanaise.mp3",
    picture: undefined
};

export const QUESTION_INS6: GameQuestion = {
    id: "Ins6",
    title: "Qui a chanter \"Ne me quitte pas\" ?",
    answerList: [INS_Q6_1, INS_Q6_2],
    startTime: undefined,
    endTime: undefined,
    sound: "./assets/sounds/neMeQuittePas.mp3",
    picture: undefined
};
export const QUESTIONS_INS: GameQuestion[] = [ QUESTION_INS1,QUESTION_INS2, QUESTION_INS3,QUESTION_INS4,QUESTION_INS5,QUESTION_INS6];
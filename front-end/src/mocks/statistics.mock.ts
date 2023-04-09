import { GameQuiz } from "../models/gameQuiz.model";
import { Statistics } from "../models/statistics.model";
import { GAMEQUIZ_3_QUIZ2, GAMEQUIZ_3_QUIZ3, GAMEQUIZ_4_QUIZ3, GAMEQUIZ_5_QUIZ1 } from "./gameQuiz.mock";

let mapGood3: Map<number, GameQuiz> = new Map();
mapGood3.set(2, GAMEQUIZ_3_QUIZ2);
mapGood3.set(3, GAMEQUIZ_3_QUIZ3);

let mapGood4: Map<number, GameQuiz> = new Map();
mapGood4.set(2, GAMEQUIZ_4_QUIZ3);

let mapGood5: Map<number, GameQuiz> = new Map();
mapGood5.set(1, GAMEQUIZ_5_QUIZ1);


export const STAT_GOOD_3: Statistics = {
    id: 1,
    playedQuizList: mapGood3
}

export const STAT_GOOD_4: Statistics = {
    id: 2,
    playedQuizList: mapGood4
}

export const STAT_GOOD_5: Statistics = {
    id: 3,
    playedQuizList: mapGood5
}
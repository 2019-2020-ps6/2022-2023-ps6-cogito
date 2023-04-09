import { GameQuiz } from "./gameQuiz.model";

export interface Statistics {
    id: number;
    playedQuizList: Map<number, GameQuiz>;
}
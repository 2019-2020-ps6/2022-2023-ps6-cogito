import { Quiz } from "./quiz.model";
import { GameQuiz } from "./gameQuiz.model";

export interface Statistics {
    id: number;
    playedQuizList: Map<Quiz, GameQuiz[]>;
}
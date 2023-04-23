import { GameQuestion } from "./gameQuestion.model";

export interface GameQuiz {
    id: number;
    quizId: number;
    questionList: GameQuestion[];

    startTime?: Date;
    endTime?: Date;
}
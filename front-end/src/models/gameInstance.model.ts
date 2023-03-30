import { GameQuestion } from "./gameQuestion.model";

export interface GameInstance {
    id: number;
    quizId: number;
    gameQuestionList: GameQuestion[];
    startTime: Date | undefined;
    endTime: Date | undefined;
}
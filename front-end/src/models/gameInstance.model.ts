import { GameQuestion } from "./gameQuestion.model";

export interface GameInstance {
    id: string;
    quizId: string;
    gameQuestionList: GameQuestion[];
    startTime: Date | undefined;
    endTime: Date | undefined;
}
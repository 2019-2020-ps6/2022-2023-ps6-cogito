import { GameQuestion } from "./gameQuestion.model";

export interface GameInstance {
    id: string;
    quizTitle: string;
    gameQuestionList: GameQuestion[];
    startTime: Date | undefined;
    endTime: Date | undefined;
}
import { GameQuestion } from "./gameQuestion.modele";

export interface GameInstance {
    id: string;
    quizId: string;
    gameQuestionList: GameQuestion[];
    startTime: Date | undefined;
    endTime: Date | undefined;
}
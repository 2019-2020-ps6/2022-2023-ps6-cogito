import { GameAnswer } from "./gameAnswer.model";

export interface GameQuestion {
    id: number;
    title: string;
    gameAnswerList: GameAnswer[];
    startTime: Date | undefined;
    endTime: Date | undefined;
}
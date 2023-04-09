import { GameAnswer } from "./gameAnswer.model";

export interface GameQuestion {
    id: number;
    title: string;
    gameAnswerList: GameAnswer[];
    startTime: Date | undefined;
    endTime: Date | undefined;
    picture:string|undefined;
    sound:string|undefined;
    corDescription: string|undefined;
    picDescription: string|undefined;
}
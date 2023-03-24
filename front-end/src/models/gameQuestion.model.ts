import { GameAnswer } from './gameAnswer.model';

export interface GameQuestion {
    id: string;
    title: string;
    gameAnswerList: GameAnswer[];
    startTime: Date | undefined;
    endTime: Date | undefined;
}
import { Answer } from './answer.modele';

export interface GameQuestion {
    id: string;
    title: string;
    answerList: Answer[];
    startTime: Date | undefined;
    endTime: Date | undefined;
}
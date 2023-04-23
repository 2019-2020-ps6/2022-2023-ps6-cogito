import { Answer } from "./answer.model";
import { Correcting } from "./correcting.model";
import { MediaType } from "./question.model";

export interface GameQuestion {
    id: number;
    questionId: number;
    title: string;
    answersMediaType: MediaType;
    answerList: Answer[];
    correcting?: Correcting;
    hint?: string;
    picture?: string;
    sound?: string;

    startTime?: Date;
    endTime?: Date;
    displayedHint: boolean;
    selectedAnswer?: Answer;
}
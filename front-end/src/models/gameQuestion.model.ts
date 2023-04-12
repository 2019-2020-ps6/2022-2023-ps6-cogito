import { Answer } from "./answer.model";
import { Correcting } from "./correcting.model";
import { MediaType } from "./question.model";

export interface GameQuestion {
    id: number;
    questionId: number;
    title: string;
    defaultAnswersMediaType: MediaType;
    answerList: Answer[];
    correcting?: Correcting;
    hint?: string;
    picture?: string;
    sound?: string;

    startTime: Date | undefined;
    endTime: Date | undefined;
    displayedHint?: boolean | false;
    selectedAnswer: Answer | undefined;
}
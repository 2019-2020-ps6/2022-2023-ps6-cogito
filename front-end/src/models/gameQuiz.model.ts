import { GameQuestion } from "./gameQuestion.model";

export interface GameQuiz {
    id: number;
    quizId: number;
    title: string;
    picture: string;
    questionList: GameQuestion[];

    startTime: Date | undefined;
    endTime: Date | undefined;
}
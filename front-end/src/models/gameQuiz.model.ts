import { GameQuestion } from "./gameQuestion.model";

export interface GameQuiz {
    id: number;
    patientId: number;
    quizId: number;
    questionList: GameQuestion[];

    startTime?: Date;
    endTime?: Date;
}

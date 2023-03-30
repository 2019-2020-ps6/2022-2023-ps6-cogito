import { GameInstance } from "src/models/gameInstance.model";
import { QUESTIONS_INS } from "./gameQuestion.mock";

export const GAME_INSTRUMENTS : GameInstance = {
    id: 1,
    quizId: 1,
    gameQuestionList: QUESTIONS_INS,
    startTime: undefined,
    endTime: undefined
}
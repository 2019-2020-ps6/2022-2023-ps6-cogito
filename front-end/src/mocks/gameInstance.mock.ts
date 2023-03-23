import { GameInstance } from "src/models/gameInstance.modele";
import { QUESTIONS_INS } from "./gameQuestion.mock";

export const GAME_INSTRUMENTS : GameInstance = {
    id: "Ins1",
    quizId: "Instruments",
    gameQuestionList: QUESTIONS_INS,
    startTime: undefined,
    endTime: undefined
}
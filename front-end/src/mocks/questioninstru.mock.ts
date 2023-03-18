import { Question } from "src/models/question.modele";
import { AnswerList } from "src/models/answerList.modele";
import { ANSWER_INS4 } from "./answerlists.mock";
import { ANSWER_INS3 } from "./answerlists.mock";

export const QUESTION_INS3: Question = {
    id: 'Ins3',
    label: 'Quel est l\'intrus ?',
    answerList: ANSWER_INS3
};

export const QUESTION_INS4: Question = {
    id: 'Ins4',
    label: 'La guitare est un instrument à',
    answerList: ANSWER_INS4
};

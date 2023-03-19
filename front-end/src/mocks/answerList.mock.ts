import { AnswerList } from "src/models/answerList.modele";

export const ANSWER_INS1: AnswerList = {
    answers: [
        { value: "vrai", isCorrect: true },
        { value: "faux", isCorrect: false }
    ]
}

export const ANSWER_INS2: AnswerList = {
    answers: [
        { value: "3 cordes", isCorrect: false },
        { value: "4 cordes", isCorrect: true },
        { value: "5 cordes", isCorrect: false }
    ]
}

export const ANSWER_INS3: AnswerList = {
    answers: [
        { value: "guitare", isCorrect: true },
        { value: "violoncelle", isCorrect: false },
        { value: "contrebasse", isCorrect: false },
        { value: "alto", isCorrect: false }
    ]
};

export const ANSWER_INS4: AnswerList = {
    answers: [
        { value: "cuivre", isCorrect: false },
        { value: "vent", isCorrect: false },
        { value: "cordes", isCorrect: true },
        { value: "percussions", isCorrect: false }
    ]
};
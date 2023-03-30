import { Theme } from "src/models/theme.model";
import { QUIZ_ECHECS, QUIZZES_MUSIQUE } from "./quiz.mock";

export const THEME_MUSIQUE: Theme = {
    id: 1,
    title: "Musique",
    image: "https://www.sopadec.com/images/produits/70458-01-60c34c16108ac699531493.jpg",
    quizList: QUIZZES_MUSIQUE
};
export const THEME_SPORT: Theme = {
    id: 1,
    title: "Sport",
    image: "https://img.freepik.com/vecteurs-libre/concept-equipement-sport_1284-13034.jpg?w=2000",
    quizList: [QUIZ_ECHECS]
};
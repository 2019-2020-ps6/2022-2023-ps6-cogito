import { Theme } from "../models/theme.model";
import { QUIZ_ECHECS, QUIZZES_MUSIQUE, QUIZZES_SPORT, QUIZZES_QUOTIDIEN } from "./quiz.mock";

export const THEME_MUSIQUE: Theme = {
    id: 1,
    title: "Musique",
    picture: "https://www.sopadec.com/images/produits/70458-01-60c34c16108ac699531493.jpg",
    quizList: QUIZZES_MUSIQUE
};

export const THEME_SPORT: Theme = {
    id: 2,
    title: "Sport",
    picture: "https://img.freepik.com/vecteurs-libre/concept-equipement-sport_1284-13034.jpg?w=2000",
    quizList: QUIZZES_SPORT
};

export const THEME_QUOTIDIEN: Theme = {
    id: 3,
    title: "Quotidien",
    picture: "https://www.maisons-pierre.com/wp-content/uploads/2020/08/Visuel5.jpg",
    quizList: QUIZZES_QUOTIDIEN
};

export const THEME_LIST: Theme[] = [THEME_QUOTIDIEN, THEME_SPORT, THEME_MUSIQUE];
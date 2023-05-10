import { Theme } from "../models/theme.model";
import { QUIZ_ECHECS, QUIZZES_CINEMA, QUIZZES_CUISINE, QUIZZES_MUSIQUE, QUIZZES_SPORT } from "./quiz.mock";

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

export const THEME_CINEMA: Theme = {
    id: 3,
    title: "Cinema",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ONcdDrnUOOYEv1ttmf1eCEU3anSa32cTiEl3bG_zBYWtZWwkQFOL975PjfUYsG7PtHA&usqp=CAU",
    quizList: QUIZZES_CINEMA
};

export const THEME_CUISINE: Theme = {
    id: 4,
    title: "CUISINE",
    picture: "https://domf5oio6qrcr.cloudfront.net/medialibrary/11537/4a78f148-d427-4209-8173-f33d04c44106.jpg",
    quizList: QUIZZES_CUISINE
};
export const THEME_LIST: Theme[] = [THEME_MUSIQUE, THEME_SPORT, THEME_CINEMA,THEME_CUISINE];
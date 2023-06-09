import { Theme } from "../models/theme.model";

import { QUIZ_ECHECS, QUIZZES_CINEMA, QUIZZES_CUISINE, QUIZZES_GEO, QUIZZES_MUSIQUE, QUIZZES_SPORT, QUIZZES_QUOTIDIEN, QUIZZES_CALCUL } from "./quiz.mock";

export const THEME_MUSIQUE: Theme = {
    id: 1,
    title: "Musique",
    picture: "https://www.sopadec.com/images/produits/70458-01-60c34c16108ac699531493.jpg",
    quizzesList: QUIZZES_MUSIQUE
};

export const THEME_SPORT: Theme = {
    id: 2,
    title: "Sport",
    picture: "https://img.freepik.com/vecteurs-libre/concept-equipement-sport_1284-13034.jpg?w=2000",
    quizzesList: QUIZZES_SPORT
};

export const THEME_CINEMA: Theme = {
    id: 3,
    title: "Cinéma",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ONcdDrnUOOYEv1ttmf1eCEU3anSa32cTiEl3bG_zBYWtZWwkQFOL975PjfUYsG7PtHA&usqp=CAU",
    quizzesList: QUIZZES_CINEMA
};

export const THEME_CUISINE: Theme = {
    id: 4,
    title: "Cuisine",
    picture: "https://domf5oio6qrcr.cloudfront.net/medialibrary/11537/4a78f148-d427-4209-8173-f33d04c44106.jpg",
    quizzesList: QUIZZES_CUISINE
};

export const THEME_GEOGRAPHIE: Theme = {
    id: 5,
    title: "Géographie",
    picture: "https://www.radiofrance.fr/s3/cruiser-production/2021/05/7025520a-5446-44db-a38c-1c1281516249/560x315_gout-geographie.jpg",
    quizzesList: QUIZZES_GEO
};

export const THEME_QUOTIDIEN: Theme = {
    id: 6,
    title: "Quotidien",
    picture: "https://www.maisons-pierre.com/wp-content/uploads/2020/08/Visuel5.jpg",
    quizzesList: QUIZZES_QUOTIDIEN
};

export const THEME_MATHEMATIQUE: Theme = {
    id: 7,
    title: "Mathématiques",
    picture: "https://la1ere.francetvinfo.fr/image/YujSOf-uUaeUmjjZnQuYJ03SdxY/600x400/outremer/2022/03/28/62421efbe5164_images-4.jfif",
    quizzesList: QUIZZES_CALCUL
};

export const THEME_LIST: Theme[] = [THEME_MUSIQUE, THEME_SPORT, THEME_CINEMA,THEME_CUISINE, THEME_GEOGRAPHIE, THEME_QUOTIDIEN,THEME_MATHEMATIQUE];

export interface Patient {
    id: number;
    name: string;
    birthdate: string;
    stage: number;
    picture: string;

    themeIdList: number[];
    quizIdList: number[];
    quizToPlayList: number[];
}

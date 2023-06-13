import { Configuration } from "./configuration.model";

export interface Patient {
    id: number;
    name: string;
    birthdate: string;
    stage: number;
    picture: string;
    configuration: Configuration;
    themeIdList: number[];
    quizIdList: number[];
    quizToPlayList: number[];
}

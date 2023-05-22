import { Configuration } from "./configuration.model";
import { Quiz } from "./quiz.model";
import { Statistics } from "./statistics.model";

export interface Patient {
    id: number;
    name: string;
    birthdate: Date;
    stage: number;
    picture: string;
    statistics: Statistics;
    configuration: Configuration;

    quizResult: Map<number, number[]>;
    questionResult: Map<number, boolean[]>;

    themeIdList: number[];
    quizIdList: number[];
    quizToPlayList: number[];
}

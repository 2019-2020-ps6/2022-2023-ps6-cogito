import { Configuration } from "./configuration.model";
import { Statistics } from "./statistics.model";

export interface Patient {
    id: number;
    name: string;
    age: number;
    stage: number;
    picture: string;
    statistics: Statistics;
    configuration: Configuration;

    themeIdList: number[];
    quizIdList: number[];
}

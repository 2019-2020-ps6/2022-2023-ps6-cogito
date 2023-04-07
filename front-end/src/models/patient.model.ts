import { Configuration } from "./configuration.model";
import { Statistics } from "./statistics.model";
import { Theme } from "./theme.model";
import { Quiz } from "./quiz.model";

export interface Patient {
    id: number;
    name: string;
    age: number;
    stage: number;
    picture: string;
    statistics: Statistics;
    configuration: Configuration;

    themeList: Theme[];
    quizList: Quiz[];
}

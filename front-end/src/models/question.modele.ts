import { Answer } from './answer.modele';


export interface Question {
    id: string;
    label: string;
    answers: Answer[];
}
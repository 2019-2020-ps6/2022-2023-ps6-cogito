import { AnswerList } from './answerList.modele';


export interface Question {
    id: string;
    label: string;
    type? :string;
    answerList: AnswerList;
}
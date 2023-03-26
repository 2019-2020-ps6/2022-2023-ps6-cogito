import { Question } from "./question.model";

export interface Quiz {
    id: number;
    name: string;
    // I don't know if we need to keep the description about the Quiz 
    // It can maybe be useful to present the quiz for the older people at the beginning
    description: string;
    questions: Question[];
  }
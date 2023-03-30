import { Question } from './question.model';

export interface AdminQuiz {
    id: number;
    name: string;
    theme?: string;
    questions: Question[];
}
import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_ACTOR: Question = {
    label: 'Jean Gabin a joué dans...',
    answers: [
        {
            value: 'Les tuches II',
            isCorrect: false,
        },
        {
            value: 'La grande illusion',
            isCorrect: true,
        }
    ]
};

export const QUESTION_SPORT: Question = {
    label: 'Le sport le plus populaire au monde est...',
    answers: [
        {
            value: 'Le football',
            isCorrect: true,
        },
        {
            value: 'Le basketball',
            isCorrect: false,
        }
    ]
};

export const QUIZ_LIST: Quiz[] = [
    {
        id: 1,
        name: 'Villes françaises',
        theme: 'Géographie',
        questions: [],
    },
    {
        id: 2,
        name: 'Les acteurs',
        questions: [QUESTION_ACTOR],
    },
    {
        id: 3,
        name: 'Les sports',
        questions: [QUESTION_SPORT],
    }
];

import { Quiz } from '../models/quiz.model';
export const QUIZ_LIST: Quiz[] =[
    {
        "name": "Les Acteurs",
        "theme": "Actor",
        "id": 1,
        "questions": [
            {
                "id": 1,
                "label": "Jean Gabin a joué dans...",
                "answers": [
                    {
                        "value": "Les tuches II",
                        "isCorrect": false
                    },
                    {
                        "value": "La grande illusion",
                        "isCorrect": true
                    }
                ]
            }
        ]
    },
    {
        "name": "Les sports",
        "theme": "Sport",
        "id": 2,
        "questions": [
            {
                "id": 2,
                "label": "Aux echecs, Magnus Carlsen est champion du monde depuis...",
                "answers": [
                    {
                        "value": "2013",
                        "isCorrect": true
                    },
                    {
                        "value": "2015",
                        "isCorrect": false
                    },
                    {
                        "value": "2017",
                        "isCorrect": false
                    },
                    {
                        "value": "2019",
                        "isCorrect": false
                    }
                ]
            }
        ]
    },
    {
        "name": "Les memes",
        "theme": "Fun",
        "id": 3,
        "questions": [
            {
                "id": 3,
                "label": "Completez cette phrase: Hide the Pain...",
                "answers": [
                    {
                        "value": "Hugo",
                        "isCorrect": false
                    },
                    {
                        "value": "Joe",
                        "isCorrect": false
                    },
                    {
                        "value": "Bernard",
                        "isCorrect": false
                    },
                    {
                        "value": "Harold",
                        "isCorrect": true
                    }
                ]
            },
            {
                "id": 4,
                "label": "bbb",
                "answers": [
                    {
                        "value": "Hugo",
                        "isCorrect": false
                    },
                    {
                        "value": "Joe",
                        "isCorrect": false
                    },
                    {
                        "value": "Bernard",
                        "isCorrect": false
                    },
                    {
                        "value": "Harold",
                        "isCorrect": true
                    }
                ]
            },
            {
                "id": 5,
                "label": "Completez cette phrase: Hide the Pain...",
                "answers": [
                    {
                        "value": "Hugo",
                        "isCorrect": false
                    },
                    {
                        "value": "Joe",
                        "isCorrect": false
                    },
                    {
                        "value": "Bernard",
                        "isCorrect": false
                    },
                    {
                        "value": "Harold",
                        "isCorrect": true
                    }
                ]
            }
        ]
    }
]
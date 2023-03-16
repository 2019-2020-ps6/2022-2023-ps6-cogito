import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class QuizService {

    private quizzes = [
        { id: 1, name: 'Quiz 1', description: 'Géographie', questions: ["Quelle photo a été prise à Rome ?", "Ou se situe Venise ?", "Est-ce que Dublin est en Irlande ?"] },
        { id: 2, name: 'Quiz 2', description: 'Histoire', questions: [] },
        { id: 3, name: 'Quiz 3', description: 'Musique', questions: [] },
    ];

    constructor() { }

    getQuizzes() {
        return this.quizzes;
    }

    getQuizById(id: number) {
        return this.quizzes.find(q => q.id === id);
    }

    addQuiz(quiz: any) {
        quiz.id = this.quizzes.length + 1;
        this.quizzes.push(quiz);
    }

    updateQuiz(quiz: any) {
        const index = this.quizzes.findIndex(q => q.id === quiz.id);
        this.quizzes[index] = quiz;
    }

    deleteQuiz(id: number) {
        const index = this.quizzes.findIndex(q => q.id === id);
        this.quizzes.splice(index, 1);
    }
}

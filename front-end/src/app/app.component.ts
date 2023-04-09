import { Component } from '@angular/core';
import { QuestionsListComponent} from './questions/questions-list/questions-list.component';
import { Quiz } from '../models/quiz.model';
import { QUIZZES_MUSIQUE } from '../mocks/quiz.mock';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    quiz : Quiz | undefined;

    constructor() { 
        this.quiz = QUIZZES_MUSIQUE[0];
    }
 }
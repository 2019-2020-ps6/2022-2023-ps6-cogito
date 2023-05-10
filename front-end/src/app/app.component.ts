import { Component } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import { QUIZZES_MUSIQUE } from '../mocks/quiz.mock';
import { QuizService } from 'src/services/adminQuiz.service';
import { ConfigurationService } from 'src/services/configuration.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    quiz : Quiz | undefined;

    constructor(private QuizService : QuizService, private configurationService: ConfigurationService) { 
        this.quiz = QUIZZES_MUSIQUE[0];
        this.QuizService.selectQuiz(this.quiz);
    }
 }
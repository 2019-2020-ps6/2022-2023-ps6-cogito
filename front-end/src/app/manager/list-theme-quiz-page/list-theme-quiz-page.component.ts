import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/services/adminQuiz.service';
import { ThemeService } from 'src/services/adminTheme.service';

@Component({
  selector: 'app-list-theme-quiz-page',
  templateUrl: './list-theme-quiz-page.component.html',
  styleUrls: ['./list-theme-quiz-page.component.scss']
})
export class ListThemeQuizPageComponent implements OnInit{
  constructor(private quizService: QuizService,private themeService: ThemeService) { }


  ngOnInit(): void {
    this.quizService.deselectQuestion();
    this.themeService.deselectTheme();
  }


}

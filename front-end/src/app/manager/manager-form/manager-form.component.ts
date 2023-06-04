import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { Theme } from 'src/models/theme.model';
import { QuizService } from 'src/services/adminQuiz.service';
import { ThemeService } from 'src/services/adminTheme.service';


@Component({
  selector: 'app-manager-form',
  templateUrl: './manager-form.component.html',
  styleUrls: ['./manager-form.component.scss']
})
export class ManagerFormComponent implements OnInit{

  public element : string | undefined;

  public quiz : Quiz | undefined;

  public theme : Theme | undefined;

  public selectedOption : string | undefined = 'general';
  constructor(private quizService: QuizService,private themeService: ThemeService, private route: ActivatedRoute ) { }

  ngOnInit(): void {

    this.element = window.location.href.split('/')[3];
    const elementId = this.route.snapshot.params['id'];
    if(this.element){
      if(this.element == 'quiz-form'){
        // subscribe to quizService
        console.log(elementId)
        this.quizService.selectQuizById(elementId);
        this.quizService.getSelectedQuiz().subscribe(quiz => {
          this.quiz = JSON.parse(JSON.stringify(quiz)) ;
        }
        );
        console.log(this.theme);
        this.themeService.getSelectedTheme().subscribe(theme => {
          this.theme = JSON.parse(JSON.stringify(theme)) ;
        }
        );
      }
      else if(this.element === 'theme-form'){
        // subscribe to themeService
        this.themeService.selectThemeById(elementId);
        this.themeService.getSelectedTheme().subscribe(theme => {
          this.theme = JSON.parse(JSON.stringify(theme)) ;
        }
        );
      }
    }
  }


  saveElement() : void{
    if(this.element){
      if(this.element == 'quiz-form'){
        // subscribe to quizService
        //this.themeService.updateQuiz(this.quiz as Quiz);
        this.quizService.updateQuizList(this.quiz as Quiz);
        if(this.theme){
          this.themeService.addQuiz(this.quiz as Quiz);
          this.themeService.updateThemeList(this.theme);
        }
      }
      else if(this.element === 'theme-form'){
        // subscribe to themeService
        this.themeService.updateThemeList(this.theme as Theme);
        this.themeService.deselectTheme();
      }
    }
    
  }

  resetElement() : void{
    if(this.element){
      if(this.element === 'quiz-form'){
        // subscribe to quizService
        this.quizService.resetSelectedQuiz();
      }
      else if(this.element === 'theme-form'){
        // subscribe to themeService
        this.themeService.resetSelectedTheme();
      }
    }
  }
}



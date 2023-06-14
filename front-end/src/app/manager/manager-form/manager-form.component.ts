import { OnInit } from '@angular/core';
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

  public elementBool : string | undefined;

  public quiz : Quiz | undefined;

  public theme : Theme | undefined;

  public selectedOption : string | undefined = 'general';
  constructor(private quizService: QuizService,private themeService: ThemeService, private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.element = window.location.href.split('/')[3];
    const elementId = this.route.snapshot.params['id'];
    this.elementBool = this.route.snapshot.params['bool'];
    if(this.element){
      if(this.element == 'quiz-form'){
        // subscribe to quizService
        console.log(elementId)
        this.quizService.selectQuizById(elementId);
        this.quizService.getSelectedQuiz().subscribe(quiz => {
          this.quiz = JSON.parse(JSON.stringify(quiz)) ;
        }
        );
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
        console.log(this.theme);
        this.quizService.updateQuizList(this.quiz as Quiz, this.theme?.id as number);
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
        this.quizService.resetSelectedQuiz(this.theme?.id as number);
        if(this.elementBool){
          this.quizService.removeQuiz(this.quiz as Quiz);
        }
      }
      else if(this.element === 'theme-form'){
        // subscribe to themeService
        this.themeService.resetSelectedTheme();
        if(this.elementBool)
          this.themeService.removeTheme(this.theme as Theme);
      }
    }
  }
}



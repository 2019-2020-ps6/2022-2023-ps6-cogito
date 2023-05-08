import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { Theme } from 'src/models/theme.model';
import { QuizService } from 'src/services/adminQuiz.service';
import { ThemeService } from 'src/services/adminTheme.service';
import { Location } from 'src/services/location.service';

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

  public myLocation : string[] | undefined;

  public previousRoute : string | undefined;
  constructor(private quizService: QuizService,private themeService: ThemeService, private route: ActivatedRoute, public location: Location) { }

  ngOnInit(): void {
    // check the url to know which element is selected
    this.location.addPathToHistory({path:window.location.href.split('/')[3],id: +this.route.snapshot.params['id']});
    console.log(this.location.getHistory());

    this.element = window.location.href.split('/')[3];
    const elementId = +this.route.snapshot.params['id'];
    if(this.element){
      if(this.element == 'quiz-form'){
        // subscribe to quizService
        this.quizService.selectQuizById(elementId);
        this.quizService.getSelectedQuiz().subscribe(quiz => {
          this.quiz = JSON.parse(JSON.stringify(quiz)) ;
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

  getPreviousRoute() : void {
    const previous =  this.location.backToHistory();
    this.previousRoute =  '/' + previous.path + '/';
    if(previous.id){
      this.previousRoute +=  previous.id;
    }
    console.log(this.previousRoute);
  }

}



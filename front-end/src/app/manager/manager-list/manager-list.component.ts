import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { Theme } from 'src/models/theme.model';
import { ThemeService } from 'src/services/adminTheme.service';
import { QuizService } from 'src/services/adminQuiz.service';
import { Location } from 'src/services/location.service';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.scss']
})
export class ManagerListComponent implements OnInit{

  @Input()
  public element : string | undefined;

  @Input()
  public elementId : number | undefined;

  public quizList : Quiz[] | undefined;

  public themeList : Theme[] | undefined;

  public listToDisplay : any[] | undefined;

  constructor(private themeService: ThemeService, private quizService: QuizService,private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    // check the url to know which element is selected

    if(!this.element){ // if the element is not defined, it means that the list is displayed from the menu
      this.element = window.location.href.split('/')[3];
      this.elementId = 0;
    }

    if(!this.elementId && this.elementId !== 0){ 
      this.elementId = +this.route.snapshot.params['id'];
    }

    if(this.element){
      if(this.element == 'quiz-list'){
        // subscribe to quizService
        if(!this.elementId){
          this.quizService.getQuizList().subscribe(quizList => {
            this.quizList = JSON.parse(JSON.stringify(quizList)) ;
            this.listToDisplay = this.quizList;
            console.log(this.listToDisplay);
          }
          );
        }
        else{
          this.themeService.getQuizListByThemeId(this.elementId).subscribe(quizList => {
            this.quizList = JSON.parse(JSON.stringify(quizList)) ;
            this.listToDisplay = this.quizList;
          }
          );
        }
      }
      else if(this.element === 'theme-list'){
        // subscribe to themeService
        if(!this.elementId){
          this.themeService.getThemeList().subscribe(themeList => {
            this.themeList = JSON.parse(JSON.stringify(themeList)) ;
            this.listToDisplay = this.themeList;
          }
          );
        }
      }
    }
  }

  removeElement(element : any) : void{
    if(this.element){
      if(this.element == 'quiz-list'){
        // subscribe to quizService
        this.quizService.removeQuiz(element as Quiz);
      }
      else if(this.element === 'theme-list'){
        // subscribe to themeService
        this.themeService.removeTheme(element as Theme);
      }
    }
  }
}

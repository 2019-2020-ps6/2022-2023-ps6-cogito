import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { Theme } from 'src/models/theme.model';
import { ThemeService } from 'src/services/adminTheme.service';

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

  constructor(private themeService: ThemeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // check the url to know which element is selected
    if(!this.element){
      this.element = window.location.href.split('/')[3];
    }
    if(!this.elementId){
      this.elementId = +this.route.snapshot.params['id'];
    }
    if(this.element){
      if(this.element == 'quiz-list'){
        // subscribe to quizService
        this.themeService.getQuizListByThemeId(this.elementId).subscribe(quizList => {
          this.quizList = JSON.parse(JSON.stringify(quizList)) ;
          this.listToDisplay = this.quizList;
        }
        );
      }
      else if(this.element === 'theme-list'){
        // subscribe to themeService
      }
    }
  }

}

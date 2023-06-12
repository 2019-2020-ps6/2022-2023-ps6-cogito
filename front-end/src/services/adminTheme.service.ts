import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Quiz } from 'src/models/quiz.model';
import { Theme } from 'src/models/theme.model';
import {THEME_LIST} from 'src/mocks/theme.mock';
import { QuizService } from './adminQuiz.service';
import { serverUrl, httpOptionsBase } from "../configs/server.config";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeList: Theme[] = [];

  private selectedTheme: Theme | undefined;
  private selectionThemeSubject: BehaviorSubject<Theme> = new BehaviorSubject<Theme>({} as Theme);
  private themeAdded$: BehaviorSubject<Theme> = new BehaviorSubject<Theme>({} as Theme);

  private oldSelectionTheme: Theme | undefined;

  private selectedQuiz: Quiz | undefined;
  //private selectionQuizSubject: BehaviorSubject<Quiz> = new BehaviorSubject<Quiz>({} as Quiz);
  private oldSelectionQuiz: Quiz | undefined;

  private typeOfForm: string = "creation";

  //private quizListSubject: BehaviorSubject<Quiz[]> = new BehaviorSubject<Quiz[]>([] as Quiz[]);
  private allQuizList: Quiz[] = [];

  // behaviourSubject of themeList
  private themeListSubject: BehaviorSubject<Theme[]> = new BehaviorSubject<Theme[]>([] as Theme[]);

  constructor(private quizService: QuizService, private http: HttpClient,private router: Router, private route: ActivatedRoute) { 
    this.selectionThemeSubject.next(this.selectedTheme as Theme);
    this.quizService.getSelectedQuiz().subscribe((quiz: Quiz) => {
        this.selectedQuiz = quiz;
        }
    );

    this.quizService.getQuizList().subscribe((quizList: Quiz[]) => {
        this.allQuizList = quizList;
    }
    );
  }

    getThemeList(): Observable<Theme[]> {
        this.retrieveThemeList();
        this.themeListSubject.next(this.themeList);
        return this.themeListSubject.asObservable();
    }

    getQuizListByThemeId(id: number): Observable<Quiz[]> {
        // return all the quiz from allQuizList which are in the theme with id = id
        let theme = this.themeList.find(theme => theme.id === id);
        let quizList: Quiz[] = [];
        theme?.quizzesList.forEach(quiz => {
            let tmpQuiz = this.allQuizList.find(q => q.id === quiz.id);
            if(tmpQuiz !== undefined) {
                quizList.push(tmpQuiz);
            }
        }
        );
        return new BehaviorSubject<Quiz[]>(quizList).asObservable();
    }


  selectThemeById(id: number): void {
    console.log("selectThemeById");
    console.log(id);
    console.log(this.themeList);
    for(let i = 0; i < this.themeList.length; i++){
      console.log(this.themeList[i].id);
      console.log(id);
      if(this.themeList[i].id.toString() === id.toString()){
        this.selectedTheme = this.themeList[i];
        break;
      }
    }
    console.log(this.selectedTheme);
    this.oldSelectionTheme = JSON.parse(JSON.stringify(this.selectedTheme)) as Theme;
    this.selectionThemeSubject?.next(this.selectedTheme as Theme);
  }

  selectTheme(theme?: Theme): void { 
    this.selectThemeById(theme?.id as number);
  }

  getSelectedTheme(): Observable<Theme> {
    return this.selectionThemeSubject.asObservable();
  }

  getIdOfSelectedTheme(): number {
    return this.selectedTheme?.id as number;
  }

  selectQuiz(quiz?: Quiz): void { 
    this.selectedQuiz = quiz;
    this.typeOfForm = "edition";
    this.quizService.selectQuiz(quiz);
    this.oldSelectionQuiz = JSON.parse(JSON.stringify(this.selectedQuiz)) as Quiz;
  }

  deselectQuiz(): void {   
    this.selectedQuiz = undefined;
    this.quizService.selectQuiz(this.selectQuiz as unknown as Quiz);
  }

  resetSelectedQuiz(): void{
    //console.log("resetSelectedQuiz");
    this.selectedQuiz = JSON.parse(JSON.stringify(this.oldSelectionQuiz)) as Quiz;
    //console.log(this.selectedQuiz);
    this.quizService.selectQuiz(this.selectedQuiz);
  }


  resetSelectedTheme(): void{
    if(this.oldSelectionTheme?.title === ''){
      this.removeTheme(this.oldSelectionTheme);
    }
    else{
      this.selectedTheme = JSON.parse(JSON.stringify(this.oldSelectionTheme)) as Theme;
      //console.log(this.selectedTheme);
      for(let i = 0; i < this.selectedTheme?.quizzesList.length; i++){
        this.quizService.updateQuizList(this.selectedTheme?.quizzesList[i]);
      }
      this.selectionThemeSubject.next(this.selectedTheme as Theme);
      this.updateThemeList(this.selectedTheme);
    }
  }
  
  getIdOfNewQuiz(): number{
    let id = 0;
    this.selectedTheme?.quizzesList?.forEach(quiz => {
      if(quiz.id > id){
        id = quiz.id;
      }
    });
    return id + 1;
  }


  /*
    add a quiz to selectedTheme
  */
  addQuiz(quiz: Quiz): void {
    const updatedQuizList = [...this.selectedTheme?.quizzesList as Quiz[]];
    updatedQuizList.push(quiz);
    this.selectedTheme = {...this.selectedTheme, quizzesList: updatedQuizList} as Theme;
    this.selectionThemeSubject.next(this.selectedTheme as Theme);
    this.updateThemeList(this.selectedTheme);
    this.quizService.updateQuizList(quiz);
  }

  addTheme(theme: Theme): void {
    if(theme.title === ""){
      theme.title = "NOUVEAU"
    }
    this.addThemeB(theme);
  }

  addThemeB(theme: {}): void {
    const urlWithId = serverUrl + "/themes/";
    this.http.post<Theme>(urlWithId, theme, httpOptionsBase).subscribe(themeb => {
        this.themeList.push(themeb);
        this.themeAdded$.next(themeb);
        this.selectionThemeSubject.next(themeb);
        this.typeOfForm = "creation";
        console.log("/theme-form/"+ themeb.id);
        this.router.navigate(["/theme-form/"+ themeb.id + "/"+"true"]);
    });
}

  createAndSelectNewQuiz(): void {
    const quiz = {} as Quiz;
    quiz.id = this.getIdOfNewQuiz();
    quiz.title = "";
    quiz.questionList = [];
    quiz.picture = "";
    this.addQuiz(quiz);
    this.selectQuiz(quiz);
    this.typeOfForm = "creation";
    //console.log(quiz);
  }

  getTypeOfForm(): string{
    return this.typeOfForm;
  }

  updateThemeList(theme: Theme): void {
    let themeIndex = this.themeList[this.themeList.findIndex(q => q.id === theme.id)];
    if(theme.title === '')
      theme.title = 'Nouveau thème';
    if(themeIndex.id === theme.id){
      this.updateTheme(theme);
    }
    else {
      this.addThemeB(theme);
    }
    this.themeListSubject.next(this.themeList);
  }


  removeTheme(theme: Theme): void {
    const index = this.themeList.findIndex(q => q.id === theme.id);
    if (index !== undefined && index >= 0) {
      const urlWithId = serverUrl + "/themes/";
        this.http.delete(urlWithId + theme.id).subscribe(() =>
            this.retrieveThemeList()
        );

      this.themeListSubject.next(this.themeList);
      theme.quizzesList.forEach(quiz => {
        this.quizService.removeQuiz(quiz);
      }
      );
    }
  }

  createAndSelectNewTheme(): void {
    const theme = {} as Theme;
    theme.title = "";
    theme.quizzesList = [];
    this.addTheme(theme);
  }

  updateTheme(theme: Theme) {
    let index: string = this.themeList[this.themeList.findIndex(
        (themeInList: Theme): boolean => themeInList.id === theme.id)].id.toString();
    if (index !== "") {
      const urlWithId = serverUrl + "/themes/"+index;
      this.http.put<Theme>(urlWithId, theme, httpOptionsBase).subscribe(() =>
      this.retrieveThemeList()
  );
        this.themeList.sort((a, b) => a.title.localeCompare(b.title));
        this.themeListSubject.next(this.themeList);
        //console.log("Patient updated : ", theme);
    }

}

  deselectTheme(): void {
    this.selectedTheme = undefined;
    this.selectionThemeSubject.next(this.selectedTheme as unknown as Theme);
  }

  retrieveThemeList(): void {
    const urlWithId = serverUrl + "/themes/";
    this.http.get<Theme[]>(urlWithId).subscribe(themes => {       
        themes.sort((a, b) => a.title.localeCompare(b.title)); 
        this.themeList = themes;
        this.themeListSubject.next(this.themeList);
    });
  }

  findInWhichThemeIsQuiz(id: number): Theme | undefined{
    let theme = this.themeList.find(theme => theme.quizzesList.find(q => q.id === id) !== undefined);
    return theme;
  }

}






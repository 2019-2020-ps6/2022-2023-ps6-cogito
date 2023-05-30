import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Quiz } from 'src/models/quiz.model';
import { Theme } from 'src/models/theme.model';
import {THEME_LIST} from 'src/mocks/theme.mock';
import { QuizService } from './adminQuiz.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeList: Theme[] = THEME_LIST;

  private selectedTheme: Theme | undefined;
  private selectionThemeSubject: BehaviorSubject<Theme> = new BehaviorSubject<Theme>({} as Theme);
  private oldSelectionTheme: Theme | undefined;

  private selectedQuiz: Quiz | undefined;
  //private selectionQuizSubject: BehaviorSubject<Quiz> = new BehaviorSubject<Quiz>({} as Quiz);
  private oldSelectionQuiz: Quiz | undefined;

  private typeOfForm: string = "creation";

  //private quizListSubject: BehaviorSubject<Quiz[]> = new BehaviorSubject<Quiz[]>([] as Quiz[]);
  private allQuizList: Quiz[] = [];

  // behaviourSubject of themeList
  private themeListSubject: BehaviorSubject<Theme[]> = new BehaviorSubject<Theme[]>(this.themeList);

  constructor(private quizService: QuizService) { 
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
        return this.themeListSubject.asObservable();
    }

    getQuizListByThemeId(id: number): Observable<Quiz[]> {
        // return all the quiz from allQuizList which are in the theme with id = id
        let theme = this.themeList.find(theme => theme.id === id);
        let quizList: Quiz[] = [];
        theme?.quizList.forEach(quiz => {
            let tmpQuiz = this.allQuizList.find(q => q.id === quiz.id);
            if(tmpQuiz !== undefined) {
                quizList.push(tmpQuiz);
            }
        }
        );
        return new BehaviorSubject<Quiz[]>(quizList).asObservable();
    }


  selectThemeById(id: number): void {
    this.selectedTheme = this.themeList.find(quiz => quiz.id === id);
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
    console.log("resetSelectedQuiz");
    this.selectedQuiz = JSON.parse(JSON.stringify(this.oldSelectionQuiz)) as Quiz;
    console.log(this.selectedQuiz);
    this.quizService.selectQuiz(this.selectedQuiz);
  }


  resetSelectedTheme(): void{
    if(this.oldSelectionTheme?.title === ''){
      this.removeTheme(this.oldSelectionTheme);
    }
    else{
      this.selectedTheme = JSON.parse(JSON.stringify(this.oldSelectionTheme)) as Theme;
      console.log(this.selectedTheme);
      for(let i = 0; i < this.selectedTheme?.quizList.length; i++){
        this.quizService.updateQuizList(this.selectedTheme?.quizList[i]);
      }
      this.selectionThemeSubject.next(this.selectedTheme as Theme);
      this.updateThemeList(this.selectedTheme);
    }
  }
  
  getIdOfNewQuiz(): number{
    let id = 0;
    this.selectedTheme?.quizList?.forEach(quiz => {
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
    const updatedQuizList = [...this.selectedTheme?.quizList as Quiz[]];
    updatedQuizList.push(quiz);
    this.selectedTheme = {...this.selectedTheme, quizList: updatedQuizList} as Theme;
    this.selectionThemeSubject.next(this.selectedTheme as Theme);
    this.updateThemeList(this.selectedTheme);
    //this.quizService.updateQuizList(quiz);
  }

  addTheme(theme: Theme): void {
    const updatedThemeList = [...this.themeList];
    updatedThemeList.push(theme);
    this.themeList = updatedThemeList;
    this.themeListSubject.next(this.themeList);
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
    console.log(quiz);
  }

  getTypeOfForm(): string{
    return this.typeOfForm;
  }

  updateThemeList(theme: Theme): void {
    if(theme.title === '')
      theme.title = 'Nouveau thème';
    const index = this.themeList.findIndex(q => q.id === theme.id);
    if (index !== undefined && index >= 0) {
      const updatedThemeList = [...this.themeList];
      updatedThemeList[index] = theme;
      this.themeList = updatedThemeList;
    }
    else {
      this.themeList.push(theme);
    }
    this.themeListSubject.next(this.themeList);
  }


  removeTheme(theme: Theme): void {
    const index = this.themeList.findIndex(q => q.id === theme.id);
    if (index !== undefined && index >= 0) {
      const updatedThemeList = [...this.themeList];
      updatedThemeList.splice(index, 1);
      this.themeList = updatedThemeList;
      this.themeListSubject.next(this.themeList);
      theme.quizList.forEach(quiz => {
        this.quizService.removeQuiz(quiz);
      }
      );
    }
  }

  getIdOfNewTheme(): number{
    let id = 0;
    this.themeList?.forEach(theme => {
      if(theme.id > id){
        id = theme.id;
      }
    });
    console.log(id + 1);
    return id + 1;
  }

  createAndSelectNewTheme(): void {
    const theme = {} as Theme;
    theme.id = this.getIdOfNewTheme();
    theme.title = "";
    theme.quizList = [];
    this.addTheme(theme);
    this.selectTheme(theme);
    this.typeOfForm = "creation";
    console.log(theme);
  }

  deselectTheme(): void {
    this.selectedTheme = undefined;
    this.selectionThemeSubject.next(this.selectedTheme as unknown as Theme);
  }


  findInWhichThemeIsQuiz(id: number): Theme | undefined{
    let theme = this.themeList.find(theme => theme.quizList.find(q => q.id === id) !== undefined);
    return theme;
  }

}

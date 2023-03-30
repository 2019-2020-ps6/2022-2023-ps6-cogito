import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ThemePageComponent } from './themes/page/page.component';
import { QuizPageComponent } from './quizzes/page/page.component';
import { GamePageComponent } from './game/page/page.component';
import { ProfileListComponent } from './profiles/profile-list/profile-list.component';


const routes: Routes = [
  { path: 'home-page', component: HomePageComponent, data:{title: 'Accueil'} },
  { path: 'theme-page', component: ThemePageComponent, data : {title: 'Themes'} },
  { path: 'quiz-page', component: QuizPageComponent, data : {title: 'Quizzes'} },
  { path: 'game-page', component: GamePageComponent, data : {title: 'Game'} },
  {path: 'profile-list', component: ProfileListComponent,data:{title: 'Qui êtes-vous ?'}},

  { path: '', redirectTo: 'home-page', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
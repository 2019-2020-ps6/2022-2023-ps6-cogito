import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ProfileListComponent } from './profiles/profile-list/profile-list.component';
import { ThemePageComponent } from './themes/page/page.component';
import { QuizPageComponent } from './quizzes/page/page.component';
import { GamePageComponent } from './game/page/page.component';

const routes: Routes = [
    { path: 'home-page', component: HomePageComponent, data: { title: 'Accueil' } },
    { path: 'profile-list', component: ProfileListComponent, data: { title: 'Liste des profils' } },
    { path: 'theme-page', component: ThemePageComponent, data: { title: 'Liste des themes' } },
    { path: 'quiz-page', component: QuizPageComponent, data: { title: 'Liste des quiz' } },
    { path: 'game-page', component: GamePageComponent, data: { title: 'Question' } },
    { path: '', redirectTo: 'home-page', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
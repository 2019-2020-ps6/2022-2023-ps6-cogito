import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { ProfileListComponent } from './profiles/profile-list/profile-list.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { QuizFormComponent } from './quizzes/quiz-form/quiz-form.component';
import { GamePageComponent } from './game/page/page.component';
import { QuestionFormComponent } from './questions/question-form/question-form.component';



const routes: Routes = [
    {path: 'quiz-form', component: QuizFormComponent, data: {title: 'Create Quiz'}},
    {path: 'quiz-list', component: QuizListComponent},
    {path: 'profile-list', component: ProfileListComponent},
    {path: 'edit-quiz/:id', component: EditQuizComponent},
    { path: 'game-page', component: GamePageComponent },
    { path: 'question-form/:id', component: QuestionFormComponent},
    {path: 'add-question/:quizId', component: QuestionFormComponent},
    {path: 'add-question', component: QuestionFormComponent},
    { path: '', redirectTo: '/quiz-list', pathMatch: 'full' },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

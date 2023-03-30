import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomePageComponent } from "./home-page/home-page.component";
import { ProfileListComponent } from "./profiles/profile-list/profile-list.component";
import { QuestionListComponent } from "./questions/question-list/question-list.component";
import { AdminQuizListComponent } from "./quizzes/admin-quiz-list/admin-quiz-list.component";
import { EditQuizComponent } from "./quizzes/edit-quiz/edit-quiz.component";
import { QuizFormComponent } from "./quizzes/quiz-form/quiz-form.component";
import { ThemePageComponent } from "./themes/page/page.component";
import { QuizPageComponent } from "./quizzes/page/page.component";
import { GamePageComponent } from "./game/page/page.component";

const routes: Routes = [
    { path: "home-page", component: HomePageComponent, data: { title: "Accueil" } },
    { path: "profile-list", component: ProfileListComponent, data: { title: "Liste des profils" } },
    { path: "theme-page", component: ThemePageComponent, data: { title: "Liste des thèmes" } },
    { path: "quiz-page", component: QuizPageComponent, data: { title: "Liste des quiz" } },
    { path: "game-page", component: GamePageComponent, data: { title: "Question" } },
    { path: "admin-quiz-list", component: AdminQuizListComponent, data: { title: "Liste des quiz" } },
    { path: "quiz-form", component: QuizFormComponent, data: { title: "Formulaire de création des quiz" } },
    { path: "edit-quiz/:id", component: EditQuizComponent, data: { title: "Formulaire de modification des quiz" } },
    { path: "question-list", component: QuestionListComponent, data: { title: "Liste des questions" } },
    { path: "", redirectTo: "home-page", pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
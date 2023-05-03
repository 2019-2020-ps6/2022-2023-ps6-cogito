import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomePageComponent } from "./home-page/home-page.component";
import { PatientPageComponent } from "./patient/page/page.component";
import { ThemePageComponent } from "./theme/page/page.component";
import { QuizPageComponent } from "./quiz/page/page.component";
import { GamePageComponent } from "./game/page/page.component";
import { QuestionsListComponent } from "./questions/questions-list/questions-list.component";
import { QuestionFormComponent } from "./questions/question-form/question-form.component";

const routes: Routes = [
    { path: "home-page", component: HomePageComponent, data: { title: "Accueil" } },
    { path: "patient-page", component: PatientPageComponent, data: { title: "Qui êtes-vous ?" } },
    { path: "theme-page", component: ThemePageComponent, data: { title: "Choisissez un thème" } },
    { path: "quiz-page", component: QuizPageComponent, data: { title: "Choisissez un quiz" } },
    { path: "game-page", component: GamePageComponent },
    { path: "questions-list", component: QuestionsListComponent, data: { title: "Modification de question" } },
    { path: "question-form", component: QuestionFormComponent, data: { title: "Liste des questions" } },
    { path: "", redirectTo: "home-page", pathMatch: "full" },
    { path: "**", redirectTo: "home-page" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
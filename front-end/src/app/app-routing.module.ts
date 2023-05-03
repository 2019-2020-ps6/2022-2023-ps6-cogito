import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomePageComponent } from "./home-page/home-page.component";
import { PatientPageComponent } from "./patient/page/page.component";
import { ThemePageComponent } from "./theme/page/page.component";
import { QuizPageComponent } from "./quiz/page/page.component";
import { GamePageComponent } from "./game/page/page.component";
import { QuestionsListComponent } from "./questions/questions-list/questions-list.component";
import { QuestionFormComponent } from "./questions/question-form/question-form.component";
import { MenuComponent } from "./manager/menu/menu.component";
import { ProfilComponent } from "./manager/profil/profil.component";
import { ConfigurationComponent } from "./manager/configuration/configuration.component";
import { CreateConfigurationComponent } from "./manager/create-configuration/create-configuration.component";
import { InterfaceConfigurationComponent } from "./manager/interface-configuration/interface-configuration.component";
import { QuestionConfigurationComponent } from "./manager/question-configuration/question-configuration.component";
import { ResultsComponent } from "./manager/results/results.component";
import { ResultQuizComponent } from "./manager/result-quiz/result-quiz.component";
import { ResultQuestionComponent } from "./manager/result-question/result-question.component";


const routes: Routes = [
    { path: "home-page", component: HomePageComponent, data: { title: "Accueil" } },
    { path: "patient-page", component: PatientPageComponent, data: { title: "Qui êtes-vous ?" } },
    { path: "theme-page", component: ThemePageComponent, data: { title: "Choisissez un thème" } },
    { path: "quiz-page", component: QuizPageComponent, data: { title: "Choisissez un quiz" } },
    { path: "game-page", component: GamePageComponent },
    { path: "questions-list", component: QuestionsListComponent, data: { title: "Modification de question" } },
    { path: "question-form", component: QuestionFormComponent, data: { title: "Liste des questions" } },
    { path: "menu", component: MenuComponent, data: { title: "Menu" } },
    { path: "profil", component: ProfilComponent, data: { title: "Patient" } },
    { path: "configuration", component: ConfigurationComponent, data: { title: "Liste des configurations" } },
    { path: "create-configuration", component: CreateConfigurationComponent, data: { title: "Création de configuration" } },
    { path: "interface-configuration", component: InterfaceConfigurationComponent, data: { title: "Interface de configuration" } },
    { path: "question-configuration", component: QuestionConfigurationComponent, data: { title: "Question de configuration" } },
    { path: "results", component: ResultsComponent, data: { title: "Résultats" } },
    { path: "result-quiz", component: ResultQuizComponent, data: { title: "Résultats des quiz" } },
    { path: "result-question", component: ResultQuestionComponent, data: { title: "Résultats des questions" } },
    { path: "", redirectTo: "home-page", pathMatch: "full" },
    { path: "**", redirectTo: "home-page" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
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
    import { CreationPatientComponent } from "./manager/creation_patient/page.component";
    import { ProfilComponent } from "./manager/profil/profil.component";
    import { PatientPageListComponent } from "./manager/profil_list/page.component";
    import { ConfigurationComponent } from "./manager/configuration/configuration.component";
    import { CreateConfigurationComponent } from "./manager/create-configuration/create-configuration.component";
    import { InterfaceConfigurationComponent } from "./manager/interface-configuration/interface-configuration.component";
    import { QuestionConfigurationComponent } from "./manager/question-configuration/question-configuration.component";
    import { ResultsComponent } from "./manager/results/results.component";
    import { ResultQuizComponent } from "./manager/result-quiz/result-quiz.component";
    import { ResultQuestionComponent } from "./manager/result-question/result-question.component";
    import { AnswerConfigurationComponent } from "./manager/answer-configuration/answer-configuration.component";
    import { ManagerListComponent } from "./manager/manager-list/manager-list.component";
    import { ManagerFormComponent } from "./manager/manager-form/manager-form.component";
    import { ListThemeQuizPageComponent } from "./manager/list-theme-quiz-page/list-theme-quiz-page.component";


    const routes: Routes = [
        { path: "home-page", component: HomePageComponent, data: { title: "Accueil" } },
        { path: "modification-patient-page", component: CreationPatientComponent, data: { title: "Modifier les Informations du Profil" } },
        { path: "creation-patient-page", component: CreationPatientComponent, data: { title: "Créer un Nouveau Profil" } },
        { path: "patient-page", component: PatientPageComponent, data: { title: "Qui êtes-vous ?" } },
        { path: "profil-list", component: PatientPageListComponent, data: { title: "Liste des patients" } },
        { path: "theme-page", component: ThemePageComponent, data: { title: "Choisissez un thème" } },
        { path: "quiz-page/:themeId", component: QuizPageComponent, data: { title: "Choisissez un quiz" }},
        { path: "quiz-page", component: QuizPageComponent, data: { title: "Choisissez un quiz" } },
        { path: "game-page", component: GamePageComponent },
        { path: "game-page/:themeId", component: GamePageComponent },
        { path: "questions-list", component: QuestionsListComponent, data: { title: "Modification de question" } },
        { path: "question-form", component: QuestionFormComponent, data: { title: "Liste des questions" } },
        { path: "menu", component: MenuComponent, data: { title: "Menu" } },
        { path: "profil", component: ProfilComponent, data: { title: "Patient" } },
        { path: "configuration", component: ConfigurationComponent, data: { title: "Liste des configurations" } },
        { path: "create-configuration", component: CreateConfigurationComponent, data: { title: "Création de configuration" } },
        { path: "create-configuration-with", component: CreateConfigurationComponent, data: { title: "Sélectionner cette configuration ?", displayButtonChoose : true } },
        { path: "interface-configuration", component: InterfaceConfigurationComponent, data: { title: "Interface de configuration" } },
        { path: "question-configuration", component: QuestionConfigurationComponent, data: { title: "Question de configuration" } },
        { path: "results", component: ResultsComponent, data: { title: "Résultats" } },
        { path: "result-quiz", component: ResultQuizComponent, data: { title: "Résultats des quiz" } },
        { path: "result-question", component: ResultQuestionComponent, data: { title: "Résultats des questions" } },
        { path: "answer-configuration", component: AnswerConfigurationComponent, data: { title: "Réponses" } },
        { path: "quiz-list", component: ManagerListComponent, data: { title: "Liste de quiz" } },
        { path: "theme-list", component: ManagerListComponent, data: { title: "Liste de thèmes" } },
        { path: "quiz-form/:id", component: ManagerFormComponent, data: { title: "Formulaire de quiz" } },
        { path: "quiz-form/:id/:bool", component: ManagerFormComponent, data: { title: "Formulaire de quiz" } },
        { path: "theme-form/:id", component: ManagerFormComponent, data: { title: "Formulaire de thème" } },
        { path: "theme-form/:id", component: ManagerFormComponent, data: { title: "Formulaire de thème" } },
        { path: "theme-form/:id/:bool", component: ManagerFormComponent, data: { title: "Formulaire de thème" } },
        { path: "list-theme-quiz-page", component: ListThemeQuizPageComponent, data: { title: "Liste des thèmes et quiz" } },
        { path: "", redirectTo: "home-page", pathMatch: "full" },
        { path: "**", redirectTo: "home-page" }
    ];
    

    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
    export class AppRoutingModule {}
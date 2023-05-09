import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { PatientPageComponent } from "./patient/page/page.component";
import { PatientComponent } from "./patient/patient/patient.component";
import { PatientDeleteComponent } from "./manager/profil_list/patient/patient.component";
import { CreationPatientComponent } from "./manager/creation_patient/page.component";
import { ThemePageComponent } from "./theme/page/page.component";
import { ThemeComponent } from "./theme/theme/theme.component";
import { QuizPageComponent } from "./quiz/page/page.component";
import { QuizComponent } from "./quiz/quiz/quiz.component";
import { GamePageComponent } from "./game/page/page.component";
import { QuestionsListComponent } from './questions/questions-list/questions-list.component';
import { QuestionFormComponent } from './questions/question-form/question-form.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuComponent } from './manager/menu/menu.component';
import { ProfilComponent } from './manager/profil/profil.component';
import { PatientPageListComponent } from "./manager/profil_list/page.component";
import { ConfigurationComponent } from './manager/configuration/configuration.component';
import { CreateConfigurationComponent } from './manager/create-configuration/create-configuration.component';
import { InterfaceConfigurationComponent } from './manager/interface-configuration/interface-configuration.component';
import { QuestionConfigurationComponent } from './manager/question-configuration/question-configuration.component';
import { ResultsComponent } from './manager/results/results.component';
import { ResultQuizComponent } from './manager/result-quiz/result-quiz.component';
import { ResultQuestionComponent } from './manager/result-question/result-question.component';
import { AnswerConfigurationComponent } from './manager/answer-configuration/answer-configuration.component';
import { ManagerListComponent } from './manager/manager-list/manager-list.component';
import { ManagerFormComponent } from './manager/manager-form/manager-form.component';



@NgModule({
    declarations: [
        AppComponent,
        PatientPageListComponent,
        PatientDeleteComponent,
        HeaderComponent,
        HomePageComponent,
        PatientPageComponent,
        PatientComponent,
        ThemePageComponent,
        ThemeComponent,
        QuizPageComponent,
        QuizComponent,
        CreationPatientComponent,
        GamePageComponent,
        QuestionsListComponent,
        QuestionFormComponent,
        MenuComponent,
        ProfilComponent,
        ConfigurationComponent,
        CreateConfigurationComponent,
        InterfaceConfigurationComponent,
        QuestionConfigurationComponent,
        ResultsComponent,
        ResultQuizComponent,
        ResultQuestionComponent,
        AnswerConfigurationComponent,
        ManagerListComponent,
        ManagerFormComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
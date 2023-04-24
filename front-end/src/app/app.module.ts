import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { PatientPageComponent } from "./patient/page/page.component";
import { PatientComponent } from "./patient/patient/patient.component";
import { ThemePageComponent } from "./theme/page/page.component";
import { ThemeComponent } from "./theme/theme/theme.component";
import { QuizPageComponent } from "./quiz/page/page.component";
import { QuizComponent } from "./quiz/quiz/quiz.component";
import { GamePageComponent } from "./game/page/page.component";
import { QuestionsListComponent } from './questions/questions-list/questions-list.component';
import { QuestionFormComponent } from './questions/question-form/question-form.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomePageComponent,
        PatientPageComponent,
        PatientComponent,
        ThemePageComponent,
        ThemeComponent,
        QuizPageComponent,
        QuizComponent,
        GamePageComponent,
        QuestionsListComponent,
        QuestionFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
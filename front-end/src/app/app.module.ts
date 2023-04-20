import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

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
        GamePageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
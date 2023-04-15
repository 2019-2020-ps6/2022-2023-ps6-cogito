import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from './header/header.component';
import { QuestionsListComponent } from './questions/questions-list/questions-list.component';
import { QuestionFormComponent } from './questions/question-form/question-form.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
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
export class AppModule { }
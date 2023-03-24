import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GamePageComponent } from './game/page/page.component';
import { GameQuestionComponent } from './game/question/question.component';
import { GameAnswerComponent } from './game/answer/answer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GamePageComponent,
    GameQuestionComponent,
    GameAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

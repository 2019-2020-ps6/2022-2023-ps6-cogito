import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamePageComponent } from './game/page/page.component';
import { GameQuestionComponent } from './game/question/question.component';
import { GameAnswerComponent } from './game/answer/answer.component';
import { GameResultComponent } from './game/result/gameResult.component';

@NgModule({
  declarations: [
    AppComponent,
    GamePageComponent,
    GameQuestionComponent,
    GameAnswerComponent,
    GameResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

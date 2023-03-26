import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ThemePageComponent } from './themes/page/page.component';
import { ThemeListComponent } from './themes/theme-list/theme-list.component';
import { ThemeComponent } from './themes/theme/theme.component';
import { GamePageComponent } from './game/page/page.component';
import { GameQuestionComponent } from './game/question/question.component';
import { GameAnswerComponent } from './game/answer/answer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ThemePageComponent,
    ThemeListComponent,
    ThemeComponent,
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

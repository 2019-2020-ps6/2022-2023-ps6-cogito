import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { ProfileListComponent } from "./profiles/profile-list/profile-list.component";
import { ProfileComponent } from "./profiles/profile/profile.component";
import { ThemePageComponent } from "./themes/page/page.component";
import { ThemeListComponent } from "./themes/theme-list/theme-list.component";
import { ThemeComponent } from "./themes/theme/theme.component";
import { QuizPageComponent } from "./quizzes/page/page.component";
import { QuizListComponent } from "./quizzes/quiz-list/quiz-list.component";
import { QuizComponent } from "./quizzes/quiz/quiz.component";
import { GamePageComponent } from "./game/page/page.component";
import { GameQuestionComponent } from "./game/question/question.component";
import { GameAnswerComponent } from "./game/answer/answer.component";
import { EditQuizComponent } from "./quizzes/edit-quiz/edit-quiz.component";
import { QuizFormComponent } from "./quizzes/quiz-form/quiz-form.component";
import { AdminQuizListComponent } from "./quizzes/admin-quiz-list/admin-quiz-list.component";
import { AdminQuizComponent } from "./quizzes/admin-quiz/admin-quiz.component";
import { QuestionFormComponent } from "./questions/question-form/question-form.component";
import { QuestionListComponent } from "./questions/question-list/question-list.component";
import { QuestionComponent } from "./questions/question/question.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomePageComponent,
        ProfileListComponent,
        ProfileComponent,
        ThemePageComponent,
        ThemeListComponent,
        ThemeComponent,
        QuizPageComponent,
        QuizListComponent,
        QuizComponent,
        GamePageComponent,
        GameQuestionComponent,
        GameAnswerComponent,
        EditQuizComponent,
        QuizFormComponent,
        AdminQuizListComponent,
        AdminQuizComponent,
        QuestionFormComponent,
        QuestionListComponent,
        QuestionComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

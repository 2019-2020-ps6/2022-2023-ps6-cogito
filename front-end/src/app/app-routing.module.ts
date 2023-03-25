import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePageComponent } from './game/page/page.component';
import { GameResultComponent } from './game/result/gameResult.component';

const routes: Routes = [
  { path: 'game-page', component: GamePageComponent },
  { path: 'game-result', component: GameResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
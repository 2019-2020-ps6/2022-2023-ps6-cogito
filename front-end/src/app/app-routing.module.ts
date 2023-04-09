import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomePageComponent } from "./home-page/home-page.component";
import { PatientPageComponent } from "./patient/page/page.component";

const routes: Routes = [
    { path: "home-page", component: HomePageComponent, data: { title: "Accueil" } },
    { path: "patient-page", component: PatientPageComponent, data: { title: "Liste des patients" } },
    { path: "", redirectTo: "home-page", pathMatch: "full" },
    { path: "**", redirectTo: "home-page" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
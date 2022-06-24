import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {CreateProjectFormComponent} from "./pages/create-project-form/create-project-form.component";

const routes: Routes = [
  {path: 'create/:farmerId', component: CreateProjectFormComponent},
  {path: '**', component: LandingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

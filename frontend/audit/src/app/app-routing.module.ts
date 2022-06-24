import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {CreateProjectFormComponent} from "./pages/create-project-form/create-project-form.component";
import { ProjectComponent } from './pages/project/project.component';

const routes: Routes = [
  {path: 'create/:farmerId', component: CreateProjectFormComponent},
  {path: 'project/:projectid', component: ProjectComponent},
  {path: '**', component: LandingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

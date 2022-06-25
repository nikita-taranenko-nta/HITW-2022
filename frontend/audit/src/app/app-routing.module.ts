import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {CreateProjectFormComponent} from "./pages/create-project-form/create-project-form.component";
import { ProjectComponent } from './pages/project/project.component';
import { ProjectScoresComponent } from './pages/project-scores/project-scores.component';
import { ProjectPostPrioriComponent } from './pages/project-post-priori/project-post-priori.component';

const routes: Routes = [
  {path: 'create/:farmerid', component: CreateProjectFormComponent},
  {path: 'project/:projectid', component: ProjectComponent},
  {path: 'project/:projectid/project-score', component: ProjectScoresComponent},
  {path: 'project/:projectid/project-post-priori', component: ProjectPostPrioriComponent},
  {path: '**', component: LandingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

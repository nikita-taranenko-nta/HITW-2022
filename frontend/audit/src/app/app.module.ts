import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {CreateProjectFormComponent} from './pages/create-project-form/create-project-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {ProjectComponent} from './pages/project/project.component';
import {HttpClientModule} from "@angular/common/http";
import {MatStepperModule} from '@angular/material/stepper';
import {ProjectScoresComponent} from './pages/project-scores/project-scores.component';
import {ScoreQuestionComponent} from './components/score-question/score-question.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import { ProjectPostPrioriComponent } from './pages/project-post-priori/project-post-priori.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CreateProjectFormComponent,
    ProjectComponent,
    ProjectScoresComponent,
    ScoreQuestionComponent,
    ProjectPostPrioriComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatStepperModule,
    HttpClientModule,
    MatRadioModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

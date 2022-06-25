import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Project} from 'src/app/models/project';
import {ProjectService} from "../../shared/services/project.service";
import {Thema} from "../../models/thema";
import {ThemaService} from "../../shared/services/thema.service";
import { Score } from 'src/app/models/Score';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-project-scores',
  templateUrl: './project-scores.component.html',
  styleUrls: ['./project-scores.component.scss']
})
export class ProjectScoresComponent implements OnInit {
  public projectId: string;
  public project: Project;
  public themas: Thema[];
  displayedColumns = ['level','justification', 'score']
   scoreDescription = { 
    1:[
      {score: 0, level: "Nil", justification: "Is not aware that the environment has an impact on the activity"},
      {score: 1, level: "Low", justification: "Is aware that some factors have an impact on the activity, but does not identify them"},
      {score: 2, level: "Average", justification: "Identifies some factors that have an impact on the activity, but cannot explain their effects"},
      {score: 3, level: "Good", justification: "Identifies some factors impacting the activity and explains their effects Or identifies most of the factors impacting the activity, but cannot explain their effects"},
      {score: 4, level: "High", justification: "Identifies most of the factors impacting the activity and explains their effects"}],
    2:[
      {score: 0, level: "Nil", justification: "Is not aware that the activity has an impact on the environment"},
      {score: 1, level: "Low", justification: "Is aware that the activity has an impact on the environment, but does not identify what it is"},
      {score: 2, level: "Average", justification: "Identifies some sources of impact on the environment, but cannot explain their effects"},
      {score: 3, level: "Good", justification: "Identifies some sources of impact on the environment and explains their effects Or identifies most sources of impact, but cannot explain their effects"},
      {score: 4, level: "High", justification: "Identifies most impacts on the environment and explains their effects"}],
    3 :[
      {score: 0, level: "Nil", justification: "Does not take any action and does not see the point of committing"},
      {score: 1, level: "Low", justification: "Does not take any action, is ready to commit, but does not identify how"},
      {score: 2, level: "Average", justification: "Does not take any action, is ready to commit and identifies howOr already takes some actions, but does not see the point of committing further"},
      {score: 3, level: "Good", justification: "Already takes some actions, is willing to commit further, but does not identify how"},
      {score: 4, level: "High", justification: "Already takes some actions, is willing to commit further and identifies how"}],
    4 :[
      {score: 0, level: "Nil", justification: "Does not have the required capacities and does not identify his/her needs"},
      {score: 1, level: "Low", justification: "Does not have the required capacities, but identifies his/her needs"},
      {score: 2, level: "Average", justification: "Has some capacities, but does not identify his/her needs"},
      {score: 3, level: "Good", justification: "Has some capacities and identifies his/her needs"},
      {score: 4, level: "High", justification: "Has all the required capacities to undertake concrete actions"}],
   };
   scoresForm: FormGroup = new FormGroup({})
  constructor(
    private readonly projectService: ProjectService,
    private readonly route: ActivatedRoute,
    private readonly themaService: ThemaService
  ) {
  }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('projectid');
    this.projectService.getProject(this.projectId)
      .subscribe(project => this.project = project);
    this.themaService.getQuestionnaire()
      .subscribe(themas => { 
        this.themas = themas
        let questions = [];
        this.themas.forEach((thema) => {
          thema.scoreOverview = this.scoreDescription[thema.id];
          questions.push(...thema.questions);
        });
        questions.map(q => {
          this.scoresForm.addControl(q.id, new FormControl(''))
        })
      } );
  }
  save(){
    console.log( this.scoresForm.value);
  }
}

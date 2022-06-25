import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Project} from 'src/app/models/project';
import {ProjectService} from "../../shared/services/project.service";
import {Thema} from "../../models/thema";
import {ThemaService} from "../../shared/services/thema.service";

@Component({
  selector: 'app-project-scores',
  templateUrl: './project-scores.component.html',
  styleUrls: ['./project-scores.component.scss']
})
export class ProjectScoresComponent implements OnInit {
  public projectId: string;
  public project: Project;
  public themas: Thema[];

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
      .subscribe(themas => this.themas = themas);
  }
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Project} from 'src/app/models/project';
import {ProjectService} from "../../shared/services/project.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public projectId: string;
  public project: Project;

  constructor(
    private readonly projectService: ProjectService,
    private readonly route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('projectId');
    this.projectService.getProject(this.projectId)
      .subscribe(project => this.project = project);
  }
}

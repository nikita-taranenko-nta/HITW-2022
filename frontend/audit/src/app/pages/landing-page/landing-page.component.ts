import {Component, OnInit} from '@angular/core';
import {Project} from 'src/app/models/project';
import {ProjectService} from "../../shared/services/project.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public projects: Project[];

  constructor(private readonly projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }
}

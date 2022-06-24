import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Project } from 'src/app/models/project';
import { ProjectInfo } from 'src/app/models/project-info';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public projectId: string;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('projectid');
    this.project = {'id': this.projectId, 'projectInfo': this.projectInfo} as Project
  }

  private projectInfo: ProjectInfo = {
    'userId': '1',
    'productiveUnit': 'Project 1',
    'country': 'Belgium',
    'region': 'West-Vlaanderen',
    'municipality': 'municipality',
    'producer': 'producer',
    'contactDetails': 'Telefoon',
    'confidentialInformation': 'confidential',
  };

  project: Project
}

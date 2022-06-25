import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectInfo } from 'src/app/models/project-info';

@Component({
  selector: 'app-project-scores',
  templateUrl: './project-scores.component.html',
  styleUrls: ['./project-scores.component.scss']
})
export class ProjectScoresComponent implements OnInit {
  public projectId: string;
  public project: Project;
  
  constructor(private route: ActivatedRoute) { }

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
}

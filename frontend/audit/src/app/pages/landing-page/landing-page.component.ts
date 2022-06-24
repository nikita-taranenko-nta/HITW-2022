import {Component, OnInit} from '@angular/core';
import {Project} from 'src/app/models/project';
import {ProjectInfo} from "../../models/project-info";
import {APrioriQuestion} from "../../enums/a-priori-question";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
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
  private preAssessment: Map<APrioriQuestion, string> = new Map<APrioriQuestion, string>();

  projects = [
    {'id': '1', 'projectInfo': this.projectInfo, 'preAssessment': this.preAssessment} as Project,
    {'id': '2', 'projectInfo': this.projectInfo, 'preAssessment': this.preAssessment} as Project,
    {'id': '3', 'projectInfo': this.projectInfo, 'preAssessment': this.preAssessment} as Project,
  ]
}

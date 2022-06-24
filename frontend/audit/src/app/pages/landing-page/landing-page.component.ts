import { Component, OnInit } from '@angular/core';
import Project from 'src/app/models/project';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects =[new Project("Project 1", "Belgium", "West-Vlaanderen", "???", "Telefoon"),
  new Project("Project 1", "Belgium", "West-Vlaanderen", "???", "Telefoon"),
  new Project("Project 1", "Belgium", "West-Vlaanderen", "???", "Telefoon"),
  new Project("Project 1", "Belgium", "West-Vlaanderen", "???", "Telefoon")]

}

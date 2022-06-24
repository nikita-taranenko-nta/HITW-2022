import {Component, OnInit} from '@angular/core';
import Project from 'src/app/models/project';

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

  projects = [
    new Project('1', "Project 1", "Belgium", "West-Vlaanderen", "???", "Telefoon"),
    new Project('2', "Project 1", "Belgium", "West-Vlaanderen", "???", "Telefoon"),
    new Project('3', "Project 1", "Belgium", "West-Vlaanderen", "???", "Telefoon"),
    new Project('4', "Project 1", "Belgium", "West-Vlaanderen", "???", "Telefoon")
  ]

}

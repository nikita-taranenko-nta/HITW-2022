import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'score-question',
  templateUrl: './score-question.component.html',
  styleUrls: ['./score-question.component.scss']
})
export class ScoreQuestionComponent implements OnInit {
  @Input() public question: Question
  constructor() {}

  ngOnInit(): void {
  }

}

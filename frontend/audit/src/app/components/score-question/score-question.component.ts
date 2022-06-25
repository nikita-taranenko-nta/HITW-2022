import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'score-question',
  templateUrl: './score-question.component.html',
  styleUrls: ['./score-question.component.scss']
})
export class ScoreQuestionComponent implements OnInit {
  @Input() public question: Question
  @Input() public form: FormGroup
  constructor() {}

  ngOnInit(): void {
  }

}

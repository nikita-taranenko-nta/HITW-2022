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
  @Input() public themeId: string
  // @Input() public form: FormGroup
  @Input() public valueChanges:  (themeId: string , questionId: string, value:string)=> {};
  constructor() {}

  ngOnInit(): void {
  }
 onKeyPress(e:any ,questionId: string){
  this.valueChanges(this.themeId, questionId, e.target.value);
 }
}

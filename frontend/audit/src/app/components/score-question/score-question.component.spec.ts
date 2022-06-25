import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreQuestionComponent } from './score-question.component';

describe('ScoreQuestionComponent', () => {
  let component: ScoreQuestionComponent;
  let fixture: ComponentFixture<ScoreQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

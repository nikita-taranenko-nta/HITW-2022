import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APrioriQuestion } from 'src/app/enums/a-priori-question';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/shared/services/project.service';

type TextAreaControl = {
  type: 'textArea',
  key: string,
  defaultValue?: string,
  label: string,
}

type FormDescription = TextAreaControl[];
@Component({
  selector: 'app-project-post-priori',
  templateUrl: './project-post-priori.component.html',
  styleUrls: ['./project-post-priori.component.scss']
})
export class ProjectPostPrioriComponent implements OnInit {
  public projectId: string;
  public project: Project;
  postPrioriForm!: FormGroup;
  postPrioriFormDescription: FormDescription = []
  
  private aprioriQuestionDictionary = {
    [APrioriQuestion.Activity]: "A short description of the activity",
    [APrioriQuestion.Environmental]: "A short description of the environmental context",
    [APrioriQuestion.ActivityAndEnvironment]: "Mutual effects between the environment and the activity",
  }

  constructor(private readonly projectService: ProjectService, 
    private readonly route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.postPrioriFormDescription = Object.keys(this.aprioriQuestionDictionary).map((key) => {
      return {
        type: 'textArea',
        key: key,
        defaultValue: '',
        label: this.aprioriQuestionDictionary[key]
      } as TextAreaControl
    });

    this.postPrioriForm = new FormGroup(
      this.postPrioriFormDescription.reduce((memo, fieldDesc) => {
        return { ...memo, [fieldDesc.key]: new FormControl(fieldDesc.defaultValue || '') }
      }, {})
    )

    this.projectId = this.route.snapshot.paramMap.get('projectid');
    this.projectService.getProject(this.projectId)
      .subscribe(project => this.project = project);
  }

  getPostAssesmentAnswers() {
    const map: Map<APrioriQuestion, string> = new Map();
    for (const control in this.postPrioriForm.controls) {
      map.set(Number(control) as APrioriQuestion, this.postPrioriForm.get(control).value)
    }
    return map;
  }

  back() {
    this.router.navigate(['project', this.projectId]);
  }
  save() {
    
    //TODO: do Post
      preAssessment: this.getPostAssesmentAnswers();

    this.back();
  }

}

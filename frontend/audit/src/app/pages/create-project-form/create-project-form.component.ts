import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProjectService } from 'src/app/shared/services/project.service';
import { Project } from 'src/app/models/project';
import { ProjectInfo } from 'src/app/models/project-info';
import { APrioriQuestion } from 'src/app/enums/a-priori-question';
import { Question } from 'src/app/models/question';
import { TermsOfUse } from 'src/app/models/terms-of-use';

type InputControl = {
  type: 'input',
  key: string,
  defaultValue?: string,
  label: string,
}
type TextAreaControl = {
  type: 'textArea',
  key: string,
  defaultValue?: string,
  label: string,
}

type GenericControl = InputControl | TextAreaControl;
type FormDescription = GenericControl[];
@Component({
  selector: 'app-create-project-form',
  templateUrl: './create-project-form.component.html',
  styleUrls: ['./create-project-form.component.scss']
})

export class CreateProjectFormComponent implements OnInit {
  public farmerId: string;

  projectInfoForm = new FormGroup({
    name: new FormControl(''),
    country: new FormControl('', [Validators.minLength(2), Validators.maxLength(2)]),
    region: new FormControl(''),
    district: new FormControl(''),
    producer: new FormControl(''),
    contact: new FormControl(''),
    details: new FormControl('')
  })

  termsOfUseForm = new FormGroup({

  });

  aPrioriForm!: FormGroup;
  aPrioriFormDescription: FormDescription = []

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) {
  }

  ngOnInit(): void {
    this.farmerId = this.route.snapshot.paramMap.get('farmerid');
    this.aPrioriFormDescription = this.aprioriQuestions().map(q => {
      return {
        type: 'textArea',
        key: q.id,
        defaultValue: '',
        label: q.name
      } as GenericControl
    });

    this.aPrioriForm = new FormGroup(
      this.aPrioriFormDescription.reduce((memo, fieldDesc) => {
        return { ...memo, [fieldDesc.key]: new FormControl(fieldDesc.defaultValue || '') }
      }, {})
    )
  }
  aprioriQuestions(): Array<Question> {
    let questions = [];
    for (const question in APrioriQuestion) {
      if (!isNaN(Number(question))) {
        const enumQ = Number(question) as APrioriQuestion;
        questions.push({ id: question, name: this.getAPrioriQuestionFromEnum(enumQ) } as Question)
      }
    }
    return questions;
  }
  getAPrioriQuestionFromEnum(questionEnum: APrioriQuestion) {
    switch (questionEnum) {
      case APrioriQuestion.Activity:
        return "A short description of the activity";
      case APrioriQuestion.ActivityAndEnvironment:
        return "Mutual effects between the environment and the activity";
      case APrioriQuestion.Environmental:
        return "A short description of the environmental context";
    }
  }
  getPreAssesmentAnswers() {
    const map: Map<APrioriQuestion, string> = new Map();
    for (const control in this.aPrioriForm.controls) {
      map.set(Number(control) as APrioriQuestion , this.aPrioriForm.get(control).value )
    }
    return map;
  }
  save() {
     this.getPreAssesmentAnswers();
    let project = {
      projectInfo: {
        userId: this.farmerId,
        confidentialInformation: this.projectInfoForm.get('details').value,
        contactDetails: this.projectInfoForm.get('contact').value,
        country: this.projectInfoForm.get('country').value,
        producer: this.projectInfoForm.get('producer').value,
        region: this.projectInfoForm.get('region').value,
        municipality: this.projectInfoForm.get('district').value,
        productiveUnit: this.projectInfoForm.get('name').value
      } as ProjectInfo,
      termsOfUse: {

      } as TermsOfUse,
      preAssessment: this.getPreAssesmentAnswers()

    } as Project;
    console.log(project);
    this.projectService.postProject(project);

    this.router.navigate(['']);
  }
  cancel() {
    this.router.navigate(['']);
  }
}

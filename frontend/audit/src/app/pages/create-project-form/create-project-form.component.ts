import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProjectService } from 'src/app/shared/services/project.service';
import { Project } from 'src/app/models/project';
import { ProjectInfo } from 'src/app/models/project-info';
import { APrioriQuestion } from 'src/app/enums/a-priori-question';
import { Question } from 'src/app/models/question';
import { TermsOfUse } from 'src/app/models/terms-of-use';
import { TermsOfUseAnswerQuestion } from 'src/app/enums/terms-of-use-answer-question.enum';
import { TermsOfUseAnswer } from 'src/app/models/terms-of-use-answer';

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

type RadioControl = {
  type: 'radio',
  key: string,
  options: string[],
  defaultValue?: string
}

type GenericControl = InputControl | TextAreaControl | RadioControl;
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

  termsOfUseForm!: FormGroup;
  termsOfUseFormDescription: FormDescription = []

  aPrioriForm!: FormGroup;
  aPrioriFormDescription: FormDescription = []


  private aprioriQuestionDictionary = {
    [APrioriQuestion.Activity]: "A short description of the activity",
    [APrioriQuestion.Environmental]: "A short description of the environmental context",
    [APrioriQuestion.ActivityAndEnvironment]: "Mutual effects between the environment and the activity",
  }
  private termsOfUseQuestionDictionary = {
    [TermsOfUseAnswerQuestion.Producer_Radio]: "Which of the following terms best describes the producer?",
    [TermsOfUseAnswerQuestion.Who]: "Who participates in the application of this questionnaire?",
    [TermsOfUseAnswerQuestion.AssignedBy_Radio]: "The indicator scores are assigned by:",
    [TermsOfUseAnswerQuestion.Comment]: "Potential comments"
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) {
  }

  ngOnInit(): void {
    this.farmerId = this.route.snapshot.paramMap.get('farmerid');
    this.aPrioriFormDescription = Object.keys(this.aprioriQuestionDictionary).map((key) => {
      return {
        type: 'textArea',
        key: key,
        defaultValue: '',
        label: this.aprioriQuestionDictionary[key]
      } as GenericControl
    });
    this.termsOfUseFormDescription = Object.keys(this.termsOfUseQuestionDictionary).map((key) => {

      return TermsOfUseAnswerQuestion[key].toLowerCase().includes('radio') ?
        {
          type: 'radio',
          key: key,
          options: ["option 1", "option 2", "option 3"],
          label: this.termsOfUseQuestionDictionary[key],
          defaultValue: ''
        } as GenericControl :
        {
          type: 'textArea',
          key: key,
          defaultValue: '',
          label: this.termsOfUseQuestionDictionary[key]
        } as GenericControl

    });

    this.aPrioriForm = new FormGroup(
      this.aPrioriFormDescription.reduce((memo, fieldDesc) => {
        return { ...memo, [fieldDesc.key]: new FormControl(fieldDesc.defaultValue || '') }
      }, {})
    )

    this.termsOfUseForm = new FormGroup(
      this.termsOfUseFormDescription.reduce((memo, fieldDesc) => {
        return { ...memo, [fieldDesc.key]: new FormControl(fieldDesc.defaultValue || '') }
      }, {})
    )
  }

  getPreAssesmentAnswers() {
    const map: Map<APrioriQuestion, string> = new Map();
    for (const control in this.aPrioriForm.controls) {
      map.set(Number(control) as APrioriQuestion, this.aPrioriForm.get(control).value)
    }
    return map;
  }
getTermOfUseAnswers(){
  let answers: TermsOfUseAnswer[] = [];
  for(const control in this.termsOfUseForm.controls){
    if(TermsOfUseAnswerQuestion[control] !== TermsOfUseAnswerQuestion.Comment){
      answers.push({
        freeTextField: this.termsOfUseForm.get(control).value,
        question: TermsOfUseAnswerQuestion[control],
        selectedAnswer: this.termsOfUseForm.get(control).value
      })
    }
  }
  return answers;
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
        comment: this.termsOfUseForm.get('' + TermsOfUseAnswerQuestion.Comment).value,
        termsOfUseAnswers: this.getTermOfUseAnswers()
      } as TermsOfUse,
      preAssessment: this.getPreAssesmentAnswers()

    } as Project;
    this.getTermOfUseAnswers()
    console.log(project, this.termsOfUseForm.value);
    this.projectService.postProject(project);

    // this.router.navigate(['']);
  }
  cancel() {
    this.router.navigate(['']);
  }
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/shared/services/project.service';
import { Project } from 'src/app/models/project';
import { ProjectInfo } from 'src/app/models/project-info';

@Component({
  selector: 'app-create-project-form',
  templateUrl: './create-project-form.component.html',
  styleUrls: ['./create-project-form.component.scss']
})
export class CreateProjectFormComponent implements OnInit {
  public farmerId: string;

  projectInfoForm = new FormGroup({
    name: new FormControl(''),
    country: new FormControl('',[ Validators.minLength(2), Validators.maxLength(2)]),
    region: new FormControl(''),
    district: new FormControl(''),
    producer: new FormControl(''),
    contact: new FormControl(''),
    details: new FormControl('')
  })

  termsOfUseForm = new FormGroup({

  });

  aPrioriForm = new FormGroup({

  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) {
  }

  ngOnInit(): void {
    this.farmerId = this.route.snapshot.paramMap.get('farmerid');
  }
  save() {
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

    } as Project;

    this.projectService.postProject(project);
    
    this.router.navigate(['']);
  }
  cancel(){
    this.router.navigate(['']);
  }
}

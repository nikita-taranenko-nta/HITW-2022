import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

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


  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.farmerId = this.route.snapshot.paramMap.get('farmerId');
  }
  save() {
    console.log(this.projectInfoForm);
  }
  cancel(){
    this.router.navigate([''])
  }
}

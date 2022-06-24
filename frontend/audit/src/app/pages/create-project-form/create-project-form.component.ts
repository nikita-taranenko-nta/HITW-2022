import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-create-project-form',
  templateUrl: './create-project-form.component.html',
  styleUrls: ['./create-project-form.component.scss']
})
export class CreateProjectFormComponent implements OnInit {
  public farmerId: string;


  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.farmerId = this.route.snapshot.paramMap.get('farmerId');
  }

}

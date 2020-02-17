import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpserviceService } from '../../services/httpservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  planList;
  addSlot = false;
  fromTime: Date;
  minimumDate = new Date();
  planForm: FormGroup;
  loader: false;
  constructor(
    private elementRef: ElementRef,
    private formBuilder: FormBuilder,
    private router: Router,
    public httpService: HttpserviceService
  ) { }

  /*
   * @param
   * Get login form controll access
   */
  get plan() {
    return this.planForm.controls;
  }

  getSlotDetailsails() {
    this.httpService.getPlans().subscribe(res => {
      this.planList = res;
    }
    );
  }

  addNewPlan() {
    this.addSlot = true;
  }

  /*
  * @param create form
  * Create form group object for login form
  */
  createPlanForm() {
    this.planForm = this.formBuilder.group({
      fromTime: ['', Validators.required],
      toTime: ['', Validators.required],
      planType: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.createPlanForm();
  }

}

import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpserviceService } from '../../../services/httpservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
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
  get login() {
    return this.loginForm.controls;
  }

  /*
   * @param Login Validate
   * Validate login form with credentials
   * @input sapId and password
   */
  validateLogin() {
    if (this.loginForm.valid) {
      const postObj = {
        mobileNumber: this.loginForm.value.username,
        password: this.loginForm.value.password
      };
      this.httpService.checkLogin(postObj).subscribe(user => {
        console.log(user);
        if (user) {
          const userDetails = {
            userName: user.userName,
            role: user.role
          };
          sessionStorage.setItem('currentUser', JSON.stringify(userDetails));
          if (user.role === 'Admin') {
            this.router.navigate(['admin']);
          }
          if (user.role === 'Sales') {
            this.router.navigate(['sales']);
          }
          this.loader = false;
        }
      }, error => {
        this.loader = false;
      });
    }
  }

  /*
   * @param create form
   * Create form group object for login form
   */
  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.elementRef.nativeElement.ownerDocument.body.style.background = 'linear-gradient(to right bottom, #cfcbc9 ,#ff6200,#ff6200,#cfcbc9) fixed center';
    this.createForm();
  }
}

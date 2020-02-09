import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  rForm: FormGroup;
  isApproveAgrement: false;

  @ViewChild("nForm1", { static: false }) nForm1: NgForm;
  @ViewChild("nForm2", { static: false }) nForm2: NgForm;

  constructor(private _AuthService: AuthService, private _FormBuilder: FormBuilder
    , private _Router: Router, private _ToastrManager: ToastrManager) {
  }

  ngOnInit() {

    if (this._AuthService.loadUserData()) {
      this._Router.navigateByUrl('/admin');
    }

    this.rForm = this._FormBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      rePassword: [null],
      isRemember: [false]
    });
  }

  login() {
    let formValue = this.rForm.value;
    this._AuthService.login(formValue.username, formValue.password).then(x => {
      this._Router.navigateByUrl('/admin')
    }).catch(err => {
      this._ToastrManager.errorToastr(err.message);
    })

  }

  register() {
    let formValue = this.rForm.value;
    this._AuthService.register(formValue.username, formValue.password).then(x => {
      this._Router.navigateByUrl('/admin')
    }).catch(err => {
      this._ToastrManager.errorToastr(err.message);
    })
  }

}

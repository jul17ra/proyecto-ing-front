import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formlogin: FormGroup
  public email: AbstractControl
  public password: AbstractControl

  constructor(
    public formBuilder: FormBuilder,
  ) { 
    this.formlogin = this.formBuilder.group(
      {
        email: ['', Validators.required],
        password: ['', Validators.required],
      }
    )
    this.email = this.formlogin.controls['email']
    this.password = this.formlogin.controls['password']

  }
  

  ngOnInit(): void {
  }

}

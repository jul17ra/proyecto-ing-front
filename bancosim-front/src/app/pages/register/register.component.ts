import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formregister: FormGroup
  public email: AbstractControl
  public password: AbstractControl
  public ahorro: AbstractControl

  constructor(
    public formBuilder: FormBuilder,
  ) {
    this.formregister = this.formBuilder.group(
      {
        email: ['', Validators.required],
        password: ['', Validators.required],
        ahorro: ['',Validators.required],
      }
    )
    this.email = this.formregister.controls['email']
    this.password = this.formregister.controls['password']
    this.ahorro = this.formregister.controls['ahorro']
  }
  ngOnInit(): void {
  }

}

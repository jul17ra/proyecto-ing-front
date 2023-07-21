import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-editaccount',
  templateUrl: './editaccount.component.html',
  styleUrls: ['./editaccount.component.css']
})
export class EditaccountComponent implements OnInit {

  public formedit: FormGroup
  public email: AbstractControl
  public password: AbstractControl

  constructor(
    public formBuilder: FormBuilder,
  ) { 
    this.formedit = this.formBuilder.group(
      {
        email: ['', Validators.required],
        password: ['', Validators.required],
      }
    )
    this.email = this.formedit.controls['email']
    this.password = this.formedit.controls['password']

  } 
  
  ngOnInit(): void {
  }

}
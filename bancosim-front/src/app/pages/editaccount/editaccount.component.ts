import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
//Interfaces
import { IEditEmailRequest } from "src/app/Interfaces/IEditEmail.interface";
import { IEditPassRequest } from "src/app/Interfaces/IEditPass.interface";
//Servicios
import { FinalUserService } from "src/app/services/final-user.service";

@Component({
  selector: 'app-editaccount',
  templateUrl: './editaccount.component.html',
  styleUrls: ['./editaccount.component.css']
})
export class EditaccountComponent implements OnInit {

  public formEmailPass: FormGroup
  public formPass: FormGroup
  public email: AbstractControl
  public password: AbstractControl
  //interfaces
  editEmail!:IEditEmailRequest

  select:number =0
  constructor(
    public formBuilder: FormBuilder,
    public editService: FinalUserService,
  ) {
    this.formEmailPass = this.formBuilder.group(
      {
        email: ['', Validators.required],
        password: ['', Validators.required],
      }
    )
    this.email = this.formEmailPass.controls['email']
    this.password = this.formEmailPass.controls['password']
    this.formPass = this.formBuilder.group(
      {
        password: ['', Validators.required],
      }
    )
    // this.password = this.formPass.controls['password']

  }

  ngOnInit(): void {
  }
  submitPass(){
if (this.formPass.valid) {
      const dataUserEdit: IEditPassRequest = {
        password: this.formPass.controls['password'].value
      };

      this.editService.editPass(dataUserEdit).subscribe((res: any) => {
        console.log(res)
        this.formPass.reset()
      });
    }

  }
  submitEmailPass(){
    if (this.formEmailPass.valid) {
      const dataUserEdit: IEditEmailRequest = {
        email: this.formEmailPass.controls['email'].value,
        password: this.formEmailPass.controls['password'].value
      };

      this.editService.editEmail(dataUserEdit).subscribe((res: any) => {
        console.log(res)
        this.formEmailPass.reset()
      });
    }

  }
  changeExpand(expand:number){
    if (this.select == expand) {
      this.select = 0
    }
    else{
      this.select = expand
    }
  }
}

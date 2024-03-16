import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms'
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

  public formEmailPass: UntypedFormGroup
  public formPass: UntypedFormGroup
  public email: AbstractControl
  //interfaces
  editEmail!:IEditEmailRequest

  select:number =0
  constructor(
    public formBuilder: UntypedFormBuilder,
    public editService: FinalUserService,
  ) {
    this.formEmailPass = this.formBuilder.group(
      {
        email: ['', Validators.required],
      }
    )
    this.email = this.formEmailPass.controls['email']
    this.formPass = this.formBuilder.group(
      {
        password: ['', Validators.required],
      }
    )
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

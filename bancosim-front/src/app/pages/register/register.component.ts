import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms'
//Interface
import { IUserRegister } from "../../Interfaces/IUserRegister.interface";
import { FinalUserService } from 'src/app/services/final-user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formregister: UntypedFormGroup
  // public email: AbstractControl
  // public password: AbstractControl
  // public ahorro: AbstractControl

  constructor(
    public formBuilder: UntypedFormBuilder,
    public editService: FinalUserService,
  ) {
    this.formregister = this.formBuilder.group(
      {
        name: ['',Validators.required],
        identification: ['',Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        cellphone: ['',Validators.required],
        address: ['',Validators.required],
      }
    )
    // this.email = this.formregister.controls['email']
    // this.password = this.formregister.controls['password']
    // this.name = this.formregister.controls['name']
    // this.identification = this.formregister.controls['identification']
    // this.ahorro = this.formregister.controls['ahorro']
    // this.ahorro = this.formregister.controls['ahorro']
  }
  ngOnInit(): void {
  }
  submitRegister(){
    if(this.formregister){

      const userRegister: IUserRegister={
        idType:"0",
        name:this.formregister.controls['name'].value,
        identification:this.formregister.controls['identification'].value,
        email:this.formregister.controls['email'].value,
        password:this.formregister.controls['password'].value,
        cellphone:this.formregister.controls['cellphone'].value,
        address:this.formregister.controls['address'].value,
      }
      this.editService.register(userRegister).subscribe((res: any) => {
        console.log(res)
        this.formregister.reset()
      });

    }
  }

}

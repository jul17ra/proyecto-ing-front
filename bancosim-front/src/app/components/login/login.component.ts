import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { IUserLoginRequest } from 'src/app/Interfaces/UserLogin.interface';
import { FinalUserDTO } from 'src/app/model/DTOs/FinalUserDTO.interface';
import { FinalUser } from 'src/app/model/FinalUser.interface';
import { CommonService } from 'src/app/services/common.service';
import { FinalUserService } from 'src/app/services/final-user.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formlogin: FormGroup;
  @Output() eventLogin = new EventEmitter<FinalUser>();

  constructor(public formBuilder: FormBuilder, public http: HttpService, private userService: FinalUserService, public router:Router, public common: CommonService) {
    this.formlogin = this.formBuilder.group(
      {
        identification: ['', Validators.required],
        password: ['', Validators.required],
        keepping: [false],
      }
    )
  }


  ngOnInit() {

  }

  submit() {
    const dataUserLogin: IUserLoginRequest = {
      idType: '01',
      identification: this.formlogin.controls['identification'].value,
      password: this.formlogin.controls['password'].value
    };
    this.userService.login(dataUserLogin).subscribe((res: any) => {
      let dataRes: FinalUserDTO = res.body;
      console.log('user login :' , dataRes.finalUser);
      sessionStorage.setItem('token', btoa(dataRes.auth));
      this.eventLogin.emit(dataRes.finalUser);
      this.router.navigate(['init'], {state: {...dataRes.finalUser}});
    });
  }

}

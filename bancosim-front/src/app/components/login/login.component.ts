import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { IUserLoginRequest } from 'src/app/Interfaces/UserLogin.interface';
import { FinalUserService } from 'src/app/services/final-user.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formlogin: FormGroup

  constructor(public formBuilder: FormBuilder, public http: HttpService, private userService: FinalUserService, private httpService: HttpClient) {
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
    this.userService.login(dataUserLogin).subscribe(res => {
      const auth = res.headers.get('Authorization');
      console.log(auth);
      console.log(res);
    });
  }

}

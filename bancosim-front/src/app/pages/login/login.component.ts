import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { IUserLoginRequest } from 'src/app/Interfaces/UserLogin.interface';
import { FinalUserDTO } from 'src/app/model/DTOs/FinalUserDTO.interface';
import { FinalUser } from 'src/app/model/FinalUser.interface';
import { FinalUserService } from 'src/app/services/final-user.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formlogin: FormGroup;
  @Output() eventLogin = new EventEmitter<FinalUser>();
  private keepSession = false;
  public finalUser!: FinalUser;
  public loadAnimation = false

  constructor(public formBuilder: FormBuilder, public http: HttpService, private userService: FinalUserService, public router:Router, private cookieService: CookieService) {
  this.formlogin = this.formBuilder.group(
      {
        identification: ['', Validators.required],
        password: ['', Validators.required]
      }
    )
  }

  ngOnInit() {
    const token = localStorage.getItem('token') ? atob(localStorage.getItem('token')!): false;
    if(token){
      this.userService.getUserIntoSession().subscribe(() => 
        this.router.navigate(['init'])
      );
    }
  }

  async submit() {
    const dataUserLogin: IUserLoginRequest = {
      idType: '01',
      identification: this.formlogin.controls['identification'].value,
      password: this.formlogin.controls['password'].value
    };
    this.loadAnimation = true;
    this.userService.login(dataUserLogin).subscribe((res: any) => {
      const dataRes: FinalUserDTO = res.body;
      sessionStorage.setItem('token', btoa(dataRes.auth));
      if(this.keepSession){
        localStorage.setItem('token', btoa(dataRes.auth));
        this.cookieService.set('token', btoa(dataRes.auth), 1, '/');
      }
      this.finalUser = dataRes.finalUser;
      this.loadAnimation = false;
      this.router.navigate(['init'], {state: {...dataRes.finalUser}});
    });
  }

  /**
   * Evento para mantener sesión iniciada.
   * @param check 
   */
  _keepSession(check:boolean): void{
    this.keepSession = check;
  }

}

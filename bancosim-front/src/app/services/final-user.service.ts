import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { IUserLoginRequest } from '../Interfaces/UserLogin.interface'

@Injectable({
  providedIn: 'root'
})
export class FinalUserService {

  constructor(private httpCore: HttpService) { }

  login(userLoginRequest: IUserLoginRequest) {
     return this.httpCore.apiAuthentication('/user/login', userLoginRequest);
  }

  getUserIntoSession() {
    return this.httpCore.apiPost('/user/getUserToken','')
  }
}

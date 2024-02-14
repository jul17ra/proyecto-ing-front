import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { IUserLoginRequest } from '../Interfaces/UserLogin.interface'

@Injectable({
  providedIn: 'root'
})
export class FinalUserService {

  private API = '/user/'

  constructor(private httpCore: HttpService) { }

  login(userLoginRequest: IUserLoginRequest) {
     return this.httpCore.apiAuthentication(this.API.concat('login'), userLoginRequest);
  }

  getUserIntoSession() {
    return this.httpCore.apiGet(this.API.concat('getUserToken'))
  }

  getUsersByRoleToken(){
    return this.httpCore.apiGet(this.API.concat('getUsersByRoleToken'))
  }
}

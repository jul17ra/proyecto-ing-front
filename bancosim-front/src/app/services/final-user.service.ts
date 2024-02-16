import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { IUserLoginRequest } from '../Interfaces/UserLogin.interface'
//Editar
import { IEditPassRequest } from '../Interfaces/IEditPass.interface'
import { IEditEmailRequest } from '../Interfaces/IEditEmail.interface'
@Injectable({
  providedIn: 'root'
})
export class FinalUserService {

  private API = '/user/'

  constructor(private httpCore: HttpService) { }

  login(userLoginRequest: IUserLoginRequest) {
     return this.httpCore.apiAuthentication(this.API.concat('login'), userLoginRequest);
  }
  //editar contraseña y correo
  editEmail(editEmailRequest: IEditEmailRequest) {
    return this.httpCore.apiPost(this.API.concat('editemail'), editEmailRequest);
  }
  editPass(editPassRequest: IEditPassRequest) {
    return this.httpCore.apiPost(this.API.concat('editpass'), editPassRequest);
  }
  getUserIntoSession() {
    return this.httpCore.apiGet(this.API.concat('getUserToken'))
  }

  getUsersByRoleToken(){
    return this.httpCore.apiGet(this.API.concat('getUsersByRoleToken'))
  }
}

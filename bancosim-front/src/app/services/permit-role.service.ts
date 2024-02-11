import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PermitRoleService {

  private urlBase = '/permit-role';
  private urlBaseRole = '/role'

  constructor(private httpCore: HttpService) { }

  getPermitByToken() {
    return this.httpCore.apiGet(this.urlBase.concat('/get-permit'));
  }

  getPermitByRole() {
    return this.httpCore.apiGet(this.urlBase.concat('/get-permit-by-role'));
  }

  getPermitByRoleAdmin() {
    console.log(this.urlBase.concat('/get-permit-by-role-admin'))
    return this.httpCore.apiPost(this.urlBase.concat('/get-permit-by-role-admin'));
  }

  getRolesToPermit() {
    return this.httpCore.apiGet(this.urlBaseRole.concat('/get-roles-to-permit'));
  }

  getRolesAndPermitsByUser() {
    return this.httpCore.apiGet(this.urlBase.concat('/get-goles-and-permits-by-user'));
  }

  
}

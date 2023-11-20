import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PermitRoleService {

  constructor(private httpCore: HttpService) { }

  getPermitByToken() {
    return this.httpCore.apiGet('/permit-role/get-permit');
  }
}

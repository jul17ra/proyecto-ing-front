import { Injectable } from '@angular/core';
import { FinalUser } from '../model/FinalUser.interface';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  constructor(private httpCore: HttpService) { }

  getUserAccounts(finalUser: FinalUser){
    return this.httpCore.apiPost('/user-acount/getUserAccounts', finalUser);
  }
}

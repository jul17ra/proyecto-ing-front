import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FinalUserService {

  constructor(private httpCore: HttpService) { }

  login(id: string, pass: string) {
     return this.httpCore.apiAuthentication('/user/login', {
      idType: '01',
      identification: id,
      password: pass
    });
  }
}

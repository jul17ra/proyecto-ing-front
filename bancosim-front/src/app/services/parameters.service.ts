import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ParametersService {

  constructor(private httpCore: HttpService) { }

  public getSecurityParamsActive(of: string){
    let genericRequest = {
      of
    }
    return this.httpCore.apiPost('/params/securityParamsActive', genericRequest);
  }
}

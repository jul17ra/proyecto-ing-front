import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUserLoginRequest } from '../Interfaces/UserLogin.interface';
import { CommonsService } from './commons.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  token!: string;
  res!: any;
  constructor(
    private http: HttpClient,
    private commons: CommonsService
  ) {
    this.token = atob(sessionStorage.getItem('token') + '')
  }

  apiAuthentication(api:string, data: IUserLoginRequest){
    return this.http.post(`${environment.api}${api}`, data, {observe: 'response', headers: this.getHeaders()});
  }

  apiGet(api: string) {
    this.token = atob(sessionStorage.getItem('token') + '')
    return this.http
      .get(environment.api + api, {
        headers: this.getHeaders(), withCredentials: true
      });
  }

  apiPost(api: string, data?:any) {
    this.token = atob(sessionStorage.getItem('token') + '')
    console.log('--------- [', api, '] ---------');
    console.log('--------- [', data, '] ---------');
    return this.http
      .post(`${environment.api}${api}`, data, {
        headers: this.getHeaders(), withCredentials: true
      })
  }

  private getHeaders(): any{
    let headers: any = {
     'Access-Control-Allow-Origin': '*',
     'Access-Control-Allow-Methods': '*',
    }
    console.log(this.commons.getParameterSecurity())
    if(this.commons.getParameterSecurity() === 'level-attack-high-security' && this.token !=='ée'){
      headers['X-CSRF-TOKEN'] = `${this.token}`;
    }
    if(this.commons.getParameterSecurity() === 'level-attack-medium-security'){
      headers['X-CSRF-TOKEN'] = 'your-csrf-token-value'
    }
    if(sessionStorage.getItem('token') && this.token !=='ée'){
      headers.Authorization = `Bearer ${this.token}`;
    }
    console.log('----------', ' headers ', headers, '-----------');
    return headers;
  }
}



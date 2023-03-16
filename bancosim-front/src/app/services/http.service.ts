import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { IUserLoginRequest, IUserLoginResponse } from '../Interfaces/UserLogin.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  token!: string;
  res!: any;
  constructor(
    private http: HttpClient,

  ) {
    this.token = atob(sessionStorage.getItem('token') + '')
  }

  apiAuthentication(api:string, data: IUserLoginRequest){
    return this.http.post(`http://${environment.api}${api}`, data, {observe: 'response'});
  }

  apiGet(api: string) {
    this.token = atob(sessionStorage.getItem('token') + '')
    let response;
    this.http
      .get(environment.api + api, {
        headers: { 'Authorization': `Bearer ${this.token}` }
      })
      .subscribe(apiData => {console.log(apiData); response = apiData});
      return response;
  }

  apiPost(api: string, data:any) {
    this.token = atob(sessionStorage.getItem('token') + '')
    return this.http
      .post(`http://${environment.api}${api}`, data, {
        headers: { 'Authorization': `Bearer ${this.token}` , 'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*'}
      })
  }
}



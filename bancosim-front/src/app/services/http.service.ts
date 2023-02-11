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
    const response = this.http.post('http://' + environment.api + api , data, {observe: 'response'});
    return response;
  }

  apiGet(api: string) {
    // atob(sessionStorage.getItem('token') + '')
    let response;
    this.http
      .get(environment.api + api, {
        headers: { 'Authorization': this.token }
      })
      .subscribe(apiData => {console.log(apiData); response = apiData});
      return response;
  }

  apiPost(api: string, data:any) {
    // atob(sessionStorage.getItem('token') + '')
    let response;
    console.log('http://'+environment.api + api);
    this.http
      .post(environment.api + api, data, {
        headers: { 'Authorization': this.token , 'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*'}
      })
      .subscribe(apiData => {response = apiData});
      return response;
  }
}



import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  token!: string
  constructor(
    private http: HttpClient,

  ) {
    this.token = atob(sessionStorage.getItem('token') + '')

  }

  apiAuthentication(url:string, data: any){
    return this.http.post(url , data)
    .subscribe((apiData:any) => (console.log(apiData.headers)));
  }

  apiget(url: string) {
    // atob(sessionStorage.getItem('token') + '')
    this.http
      .get(url, {
        headers: { 'Authentication': this.token }
      })
      .subscribe(apiData => (console.log(apiData)));
  }
}



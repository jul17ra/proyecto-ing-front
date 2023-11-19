import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonsService {

  constructor(public router: Router) { }

  public validIntoSession(): void {
    const token = sessionStorage.getItem('token') ? atob(sessionStorage.getItem('token')!) : false;
    if (!token) {
      sessionStorage.clear();
      this.router.navigate(['']);
    }
  }

  public cleanDataToken(): void {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

  public goTo(dir: string, data?: any) {
    if(!data) {
      this.router.navigate([dir]);
    } else {
      this.router.navigate([dir], {queryParams: data});
    }
  }

  public getParameterSecurity(){
    let security = sessionStorage.getItem('security');
    return security ? security : 'level-attack-without-security';
  }
}

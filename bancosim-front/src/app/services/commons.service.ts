import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FinalUser } from '../model/FinalUser.interface';
import { FinalUserService } from './final-user.service';

@Injectable({
  providedIn: 'root'
})
export class CommonsService {

  constructor(public router: Router,  private userService: FinalUserService) { }

  public validIntoSession(): void {
    const token = sessionStorage.getItem('token') ? atob(sessionStorage.getItem('token')!) : false;
    if (!token) {
      console.log(token);
      sessionStorage.clear();
      this.router.navigate(['']);
    }
  }

  public cleanDataToken(): void {
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}

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
    const token = localStorage.getItem('token') ? atob(localStorage.getItem('token')!) : false;
    if (!token) {
      localStorage.clear();
      this.router.navigate(['']);
    }
  }

  public cleanDataToken(): void {
    localStorage.clear();
    this.router.navigate(['']);
  }
}

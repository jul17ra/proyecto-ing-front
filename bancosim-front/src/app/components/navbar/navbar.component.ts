import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FinalUser } from 'src/app/model/FinalUser.interface';
import { URLS } from '../../const/URLS';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {

  @Input() public finalUserData!: FinalUser;
  finalUser!: FinalUser;
  public dataUser: boolean = false;
  public URLS = URLS;

  constructor(public router: Router) {
    console.log('Hello navbar');
    console.log(this.URLS.TRANSACTIONS);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['finalUserData']) {
      if (this.finalUserData) {
        this.dataUser = this.finalUserData ? true : false;
        this.finalUser = this.finalUserData // Se setea la data en una variable por si finalUserData cambia en tiempo de ejecución a undefined.
        console.log(this.finalUser);
      }
    }
  }

  ngOnInit(): void {

  }

  logOut(): void {
    console.log('logout')
    sessionStorage.clear();
    this.router.navigate([''])
  }

  redirectTo(from: string): void {
    console.log(from);
    if (this.finalUser) {
      this.router.navigate([from]);
    } else {
      this.router.navigate(['']);
    }
  }

  registerRedirect(): void {
    this.router.navigate([URLS.REGISTER]);
  }
}

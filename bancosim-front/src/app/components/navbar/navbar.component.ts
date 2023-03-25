import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FinalUser } from 'src/app/model/FinalUser.interface';
import { CommonsService } from 'src/app/services/commons.service';
import { FinalUserService } from 'src/app/services/final-user.service';
import { URLS } from '../../const/URLS';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges{

  finalUser!: FinalUser;
  public dataUser: boolean = false;
  public URLS = URLS;
  @Input() public finalUserData!: FinalUser;

  constructor(public router: Router, private commonsService:CommonsService, private userService: FinalUserService) {
    console.log('Hello navbar');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['finalUserData']){
      console.log(this.finalUserData);
      this.dataUser = this.finalUserData ? true : false;
      if(this.finalUserData){
        this.finalUser = this.finalUserData // Se setea la data en una variable por si finalUserData cambia en tiempo de ejecución a undefined.
        console.log(this.finalUser);
      }
    }
  }

  ngOnInit(): void {
    this.commonsService.validIntoSession();
    const token = sessionStorage.getItem('token');
    console.log('token', token);
    this.userService.getUserIntoSession().subscribe((res:any) => {
      this.finalUser = res;
      this.dataUser = this.finalUser ? true : false;// Se setea la data en una variable por si finalUserData cambia en tiempo de ejecución a undefined.
      console.log('finalUser', this.finalUser);
      }
    );
  }

  logOut(): void {
    console.log('logout')
    sessionStorage.clear();
    localStorage.clear();
    this.dataUser = false;
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

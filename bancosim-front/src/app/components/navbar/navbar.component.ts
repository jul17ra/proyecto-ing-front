import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FinalUser } from 'src/app/model/FinalUser.interface';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {

  @Input() public finalUserData!: FinalUser;
  finalUser! :FinalUser; 
  public dataUser: boolean = false;

  constructor(public router:Router) { 
    console.log(this.dataUser);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['finalUserData']){
      this.dataUser = this.finalUserData ? true : false;
      if(this.finalUserData){
        this.finalUser = this.finalUserData // Se setea la data en una variable por si finalUserData cambia en tiempo de ejecución a undefined.
        console.log(this.finalUser);
      }
    }
  }

  ngOnInit(): void {

  }

  logOut(): void{
    console.log('logout')
    sessionStorage.clear();
    this.router.navigate([''])
  }

}

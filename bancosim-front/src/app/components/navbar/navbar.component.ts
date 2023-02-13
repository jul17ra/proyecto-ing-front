import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinalUser } from 'src/app/model/FinalUser.interface';
import { CommonService } from 'src/app/services/common.service';
import { FinalUserService } from 'src/app/services/final-user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private finalUserData!: FinalUser;
  public dataUser: boolean = false;

  constructor(public common: CommonService, public router:Router) { }

  ngOnInit(): void {
    this.common.select().subscribe(res => this.finalUserData = res);
    this.dataUser = this.finalUserData ? true : false;
    console.log(this.finalUserData);
  }

  logOut(){
    console.log('logout')
    let finalUser!: FinalUser;
    this.common.next(finalUser);
    sessionStorage.clear();
    this.router.navigate([''])
  }

}

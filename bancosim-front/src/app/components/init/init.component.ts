import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserAccount } from 'src/app/Interfaces/IUserAccount.interface';
import { FinalUser } from 'src/app/model/FinalUser.interface';
import { FinalUserService } from 'src/app/services/final-user.service';
import { UserAccountService } from 'src/app/services/user-account.service';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit {

  finalUser!: FinalUser;
  userAccounts!: Array<IUserAccount>;

  constructor(public router: Router, private userService: FinalUserService, private userAccountService: UserAccountService) {
    this.finalUser = this.router.getCurrentNavigation()?.extras.state ? this.router.getCurrentNavigation()?.extras.state as FinalUser : this.finalUser;
    if(!this.finalUser){
      sessionStorage.clear();
      this.router.navigate(['']);
      return;
    }
    console.log('User: ', this.finalUser);
  }

  ngOnInit(): void {
    const token = sessionStorage.getItem('token') ? atob(sessionStorage.getItem('token')!): false;
    if(token && !this.finalUser){
      this.userService.getUserIntoSession().subscribe((res: any) => {
        console.log(res);
        this.finalUser = res;
      });
    }
    this.userAccountService.getUserAccounts(this.finalUser).subscribe((res:any) => {
      console.log(res);
      this.userAccounts = res as Array<IUserAccount>;
    });
  }
}

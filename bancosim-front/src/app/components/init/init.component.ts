import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserAccount } from 'src/app/Interfaces/IUserAccount.interface';
import { FinalUser } from 'src/app/model/FinalUser.interface';
import { CommonsService } from 'src/app/services/commons.service';
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
  private token!: string | boolean;

  constructor(public router: Router, private userService: FinalUserService, private userAccountService: UserAccountService, private commonsService: CommonsService) {
    this.finalUser = this.router.getCurrentNavigation()?.extras.state ? this.router.getCurrentNavigation()?.extras.state as FinalUser : this.finalUser;
  }

  async ngOnInit(): Promise<void> {
    this.token = sessionStorage.getItem('token') ? atob(sessionStorage.getItem('token')!) : false;
    this.commonsService.validIntoSession(); //Valido que continuo dentro de la sesión.
    if (this.token) {
      await this.userService.getUserIntoSession().subscribe(async (res: any) => {
        console.log(res);
        this.finalUser = res;
        await this.userAccountService.getUserAccounts(this.finalUser).subscribe((res: any) => {
          console.log(res);
          this.userAccounts = res as Array<IUserAccount>;
        });
      },(err) => {console.log(err);this.commonsService.cleanDataToken();});
    }
  }
}

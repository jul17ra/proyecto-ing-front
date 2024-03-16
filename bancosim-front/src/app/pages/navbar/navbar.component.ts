import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FinalUser } from 'src/app/model/FinalUser.interface';
import { CommonsService } from 'src/app/services/commons.service';
import { FinalUserService } from 'src/app/services/final-user.service';
import { URLS } from '../../const/URLS';
import { PermitRoleService } from 'src/app/services/permit-role.service';
import { IPermit } from 'src/app/Interfaces/IPermit.interface';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges{

  finalUser!: FinalUser;
  public dataUser: boolean = false;
  public URLS = URLS;
  public permits: Array<IPermit> = []; 
  @Input() public finalUserData!: FinalUser;

  constructor(public router: Router,
    private commonsService:CommonsService,
    private userService: FinalUserService,
    private permitRoleService: PermitRoleService,
    private cookieService: CookieService) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['finalUserData']){
      this.dataUser = this.finalUserData ? true : false;
      if(this.finalUserData){
        this.finalUser = this.finalUserData // Se setea la data en una variable por si finalUserData cambia en tiempo de ejecución a undefined.
      }
      this.permitRoleService.getPermitByToken().subscribe((res: any) => {
        console.log('respuesta de rol: ', res);
        this.permits = res;
      });
    }
  }

  ngOnInit(): void {
    this.commonsService.validIntoSession();
    const token = sessionStorage.getItem('token');
    this.userService.getUserIntoSession().subscribe((res:any) => {
      this.finalUser = res;
      if(res !== null){
        try {
          this.dataUser = this.finalUser.id !== 0 ? true : false;
        } catch (error) {
          this.dataUser = false;
        }
      }
      this.dataUser ? this.router.navigate([URLS.INIT]) : this.router.navigate([URLS.LOGIN])
      }
    );
  }

  logOut(): void {
    const security = sessionStorage.getItem('security');
    sessionStorage.clear();
    localStorage.clear();
    this.cookieService.deleteAll();
    sessionStorage.setItem('security', security!);
    this.dataUser = false;
    this.permits = [];
    this.router.navigate([''])
  }

  redirectTo(from: string): void {
    console.log('from:', from);
    if (this.finalUser) {
      this.router.navigate([from], {queryParams: {acount: '12312'}});
    } else {
      this.dataUser = false;
      this.router.navigate(['']);
    }
  }

  registerRedirect(): void {
    this.router.navigate([URLS.REGISTER]);
  }
}

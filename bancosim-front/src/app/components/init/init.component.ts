import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinalUser } from 'src/app/model/FinalUser.interface';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit {

  finalUser!: FinalUser;

  constructor(public router: Router) {
    this.finalUser = this.router.getCurrentNavigation()?.extras.state ? this.router.getCurrentNavigation()?.extras.state as FinalUser : this.finalUser;
    if(!sessionStorage.getItem('token')){
      sessionStorage.clear();
      this.router.navigate(['']);
      return;
    }
    console.log('User: ', this.finalUser);
  }

  ngOnInit(): void {

  }
}

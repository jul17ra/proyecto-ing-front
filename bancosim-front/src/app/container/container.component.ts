import { Component, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { LogoutComponent } from '../pages/logout/logout.component';
import { FinalUser } from '../model/FinalUser.interface';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  dataUser!: FinalUser

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(LogoutComponent);
  }

  data(data:any):void {
    if(data.finalUser){
      this.dataUser = data.finalUser;
    }
  }

}

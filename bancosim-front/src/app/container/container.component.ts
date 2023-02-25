import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogoutComponent } from '../components/logout/logout.component';
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
    console.log(data);
    this.dataUser = data.finalUser;
  }

}

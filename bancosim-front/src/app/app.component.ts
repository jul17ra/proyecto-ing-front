import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogoutComponent } from './components/logout/logout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bancosim-front';
  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(LogoutComponent)
  }
}


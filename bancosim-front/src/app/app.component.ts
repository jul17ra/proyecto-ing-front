import { Component } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { LogoutComponent } from './pages/logout/logout.component';

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


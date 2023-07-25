import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AccountComponent } from './pages/account/account.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { RegisterComponent } from './pages/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovimientosComponent } from './pages/movimientos/movimientos.component';
import { EditaccountComponent } from './pages/editaccount/editaccount.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { LogoutComponent } from './pages/logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { InitComponent } from './pages/init/init.component';
import { ContainerComponent } from './container/container.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { InputAppComponent } from './components/input-app/input-app.component';
import { SelectAppComponent } from './components/select-app/select-app.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    TransactionsComponent,
    RegisterComponent,
    MovimientosComponent,
    EditaccountComponent,
    LogoutComponent,
    InitComponent,
    ContainerComponent,
    NavbarComponent,
    ExpansionPanelComponent,
    InputAppComponent,
    SelectAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

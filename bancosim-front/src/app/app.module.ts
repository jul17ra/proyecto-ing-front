import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AccountComponent } from './pages/account/account.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { RegisterComponent } from './pages/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import { MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovimientosComponent } from './pages/movimientos/movimientos.component';
import { EditaccountComponent } from './pages/editaccount/editaccount.component';
import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox';
import {MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog';
import { LogoutComponent } from './pages/logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { InitComponent } from './pages/init/init.component';
import { ContainerComponent } from './container/container.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { InputAppComponent } from './components/input-app/input-app.component';
import { SelectAppComponent } from './components/select-app/select-app.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SuccessResumeComponent } from './components/success-resume/success-resume.component';
import { AccountNumberPipe } from './components/account-number.pipe';
import { ValueTxPipe } from './components/value-tx.pipe';
import { ParametersComponent } from './components/parameters/parameters.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { TableComponent } from './components/table/table.component';
import { TableRoleComponent } from './pages/admin/table-role/table-role.component';
import { TableUserComponent } from './pages/admin/table-user/table-user.component';
import { TablePermitComponent } from './pages/admin/table-permit/table-permit.component';
import { TablePermitRolesComponent } from './pages/admin/table-permit-roles/table-permit-roles.component';
import { TableParameterComponent } from './pages/admin/table-parameter/table-parameter.component';
import { MonitoringComponent } from './pages/monitoring/monitoring.component';
// import { NgxApexchartsModule } from 'ngx-apexcharts';



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
    SelectAppComponent,
    LoadingComponent,
    SuccessResumeComponent,
    AccountNumberPipe,
    ValueTxPipe,
    ParametersComponent,
    AdminComponent,
    ToggleComponent,
    TableComponent,
    TableRoleComponent,
    TableUserComponent,
    TablePermitComponent,
    TablePermitRolesComponent,
    TableParameterComponent,
    MonitoringComponent
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
    HttpClientModule,
    // NgxApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

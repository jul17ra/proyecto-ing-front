import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { LoginComponent } from './pages/login/login.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { RegisterComponent } from './pages/register/register.component';
import { MovimientosComponent } from './pages/movimientos/movimientos.component';
import { EditaccountComponent } from './pages/editaccount/editaccount.component';
import { InitComponent } from './pages/init/init.component';
import { URLS } from './const/URLS';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AdminComponent } from './pages/admin/admin.component';
import { MonitoringComponent } from './pages/monitoring/monitoring.component';

const routes: Routes = [
  {
    path: `${URLS.LOGIN}`,
    component:LoginComponent
  },
  {
    path: `${URLS.ACOUNT}`,
    component: AccountComponent
  },
  {
    path: `${URLS.TRANSACTIONS}/:a`,
    component: TransactionsComponent
  },
  {
    path: `${URLS.REGISTER}`,
    component: RegisterComponent
  },
  {
    path: ``,
    component: LoginComponent
  },
  {
    path: `${URLS.MOVEMENTS}`,
    component: MovimientosComponent
  },
  {
    path: `${URLS.EDIT}`,
    component: EditaccountComponent
  },
  {
    path: `${URLS.INIT}`,
    component: InitComponent
  },
  {
    path: `${URLS.ADMIN}`,
    component: AdminComponent
  },
  {
    path: `${URLS.MONITORING}`,
    component: MonitoringComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy} ]
})
export class AppRoutingModule { }

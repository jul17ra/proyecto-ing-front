import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { RegisterComponent } from './components/register/register.component';
import { MovimientosComponent } from './components/movimientos/movimientos.component';
import { EditaccountComponent } from './components/editaccount/editaccount.component';
import { InitComponent } from './components/init/init.component';
import { URLS } from './const/URLS';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

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
    path: `${URLS.TRANSACTIONS}/:a?account1=2123`,
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
    path: `${URLS.MOVEMENTS}/:c`,
    component: MovimientosComponent
  },
  {
    path: `${URLS.EDIT}`,
    component: EditaccountComponent
  },
  {
    path: `${URLS.INIT}`,
    component: InitComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy} ]
})
export class AppRoutingModule { }

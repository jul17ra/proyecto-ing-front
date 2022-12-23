import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { RegisterComponent } from './components/register/register.component';
import { MovimientosComponent } from './components/movimientos/movimientos.component';
import { EditaccountComponent } from './components/editaccount/editaccount.component';
import { InitComponent } from './components/init/init.component';

const routes: Routes = [
  {
    path: "login",
    component:LoginComponent
  },
  {
    path: "account",
    component: AccountComponent
  },
  {
    path: "transactions/:a",
    component: TransactionsComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "movimientos/:c",
    component: MovimientosComponent
  },
  {
    path: "edit",
    component: EditaccountComponent
  },
  {
    path: 'init',
    component: InitComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
public formAddProduct: FormGroup;
Cuenta1 = [
  {"image": "https://cdn-icons-png.flaticon.com/512/1611/1611179.png", "title":"Cuenta de Ahorros", "saldo": 100000, "description": "Todos tus ahorros, seguros en este lugar" },
  {"image": "https://cdn-icons-png.flaticon.com/512/4021/4021708.png", "title":"Tarjeta de Crédito", "saldo": 8500000,"description": "Facilidad en tus compras, ya no te preocupes por no llevar efectivo" },
  {"image": "https://cdn-icons-png.flaticon.com/512/2856/2856933.png", "title":"Credito de Consumo", "saldo": 10055896, "description": "¡Relájate! lo resolvemos por ti" }
]

  constructor(public formBuilder: FormBuilder) {
    this.formAddProduct = this.formBuilder.group(
      {
        tipo_cuenta: ['', Validators.required],
        valor: ['', Validators.required]
      }
    )
   }

  ngOnInit(): void {
  }

  submit() {
    // const dataUserLogin: IUserLoginRequest = {
    //   idType: '01',
    //   identification: this.formlogin.controls['identification'].value,
    //   password: this.formlogin.controls['password'].value
    // };
    // this.userService.login(dataUserLogin).subscribe((res: any) => {
    //   let dataRes: FinalUserDTO = res.body;
    //   console.log('user login :' , dataRes.finalUser);
    //   sessionStorage.setItem('token', btoa(dataRes.auth));
    //   if(this.keepSession){
    //     localStorage.setItem('token', btoa(dataRes.auth));
    //     this.cookieService.set('token', btoa(dataRes.auth), 1, '/');
    //   }
    //   this.finalUser = dataRes.finalUser;
    //   this.router.navigate(['init'], {state: {...dataRes.finalUser}});
    // });
  }
}

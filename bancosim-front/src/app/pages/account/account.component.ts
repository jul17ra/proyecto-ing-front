import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

Cuenta1 = [
  {"image": "https://cdn-icons-png.flaticon.com/512/1611/1611179.png", "title":"Cuenta de Ahorros", "saldo": 100000, "description": "Todos tus ahorros, seguros en este lugar" },
  {"image": "https://cdn-icons-png.flaticon.com/512/4021/4021708.png", "title":"Tarjeta de Crédito", "saldo": 8500000,"description": "Facilidad en tus compras, ya no te preocupes por no llevar efectivo" },
  {"image": "https://cdn-icons-png.flaticon.com/512/2856/2856933.png", "title":"Credito de Consumo", "saldo": 10055896, "description": "¡Relájate! lo resolvemos por ti" }
]

  constructor() { }

  ngOnInit(): void {
  }

}

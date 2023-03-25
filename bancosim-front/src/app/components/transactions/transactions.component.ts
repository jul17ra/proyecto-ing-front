import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  public formtransaction: FormGroup
  public origen: AbstractControl
  public destino: AbstractControl
  public valor: AbstractControl
  tittle: string = ""


  constructor(
    public formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.formtransaction = this.formBuilder.group(
      {
        origen: ['', Validators.required],
        destino: ['', Validators.required],
        valor: ['', Validators.required],
      }
    )
    this.origen = this.formtransaction.controls['origen']
    this.destino = this.formtransaction.controls['destino']
    this.valor = this.formtransaction.controls['valor']
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      switch (parseInt(parametros.get("a")!)) {
        case 1: {
          this.tittle = "Aquí puedes transferir a otras cuentas BancoSim";
          break
        }
        case 2: {
          this.tittle = "Paga tus productos";
          break
        }
        case 3: {
          this.tittle = "Paga tus facturas";
          break
        }
      }
    }
    )
  }

  submit(): void {
    console.log('origen', this.formtransaction.value.origen);
    console.log('destino: ', this.formtransaction.value.destino);
    console.log('valor: ', this.formtransaction.value.valor);
  }
}

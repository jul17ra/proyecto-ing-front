import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AcountsService } from 'src/app/services/acounts.service';

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
    private activatedRoute: ActivatedRoute,
    private acountsService: AcountsService,
    private http: HttpClient
  ) {
    this.formtransaction = this.formBuilder.group(
      {
        origen: ['6534232343', Validators.required],
        destino: ['', Validators.required],
        valor: ['', Validators.required],
      }
    )
    this.origen = this.formtransaction.controls['origen']
    this.destino = this.formtransaction.controls['destino']
    this.valor = this.formtransaction.controls['valor']
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((e:any) => {console.log(e);
      console.log(e.acount);
      console.log(this.formtransaction.controls['origen'].setValue(e.acount));
    });
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
    const dataToTransfer = { cantTranfer: this.formtransaction.value.valor + '', destinyNumber: this.formtransaction.value.destino + '', originNumber: this.formtransaction.value.origen + '' };
    console.log(dataToTransfer);
    this.acountsService.transferToAcount(dataToTransfer).subscribe(e => {
      console.log(e)
      this.tittle = 'Transacción realizada';
    }, error => { console.log(error) });
  }

  enviarFormulario(formularioDatos: any) {
    const url = formularioDatos.action;
    const formData = new FormData();
    formData.append('nombre', formularioDatos.nombre);
    formData.append('apellido', formularioDatos.apellido);

    this.http.post(url, formData).subscribe(response => {
      console.log('Formulario enviado con éxito');
      console.log(response);
    }, error => {
      console.error('Error al enviar formulario', error);
    });
  }
}

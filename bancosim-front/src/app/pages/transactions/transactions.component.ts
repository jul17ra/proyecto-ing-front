import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IDataExpansionPanel } from 'src/app/Interfaces/IDataExpansionPanel.interface';
import { AcountsService } from 'src/app/services/acounts.service';
import { UserAccountService } from 'src/app/services/user-account.service';

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
  dataPanel!: IDataExpansionPanel;

  @ViewChild('contentOriginAccount') contentOriginAccount!: TemplateRef<any>;
  @ViewChild('contentDestinyAccount') contentDestinyAccount!: TemplateRef<any>;
  @ViewChild('contentValueTransfer') contentValueTransfer!: TemplateRef<any>;

  constructor(
    public formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private acountsService: AcountsService,
    private userAccountService: UserAccountService
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
    this.activatedRoute.queryParams.subscribe((e: any) => {
      console.log(e);
      console.log(e.acount);
      //this.formtransaction.controls['origin'].setValue(e.acount);
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
    this.getUserAccountsWithToken;
  }

  getUserAccountsWithToken(): void{
    this.userAccountService.getUserAccountsWithToken().subscribe(e => {
      console.log('Data accounts' + e);
    })
  }

  ngAfterViewInit() {
    this.dataPanel = {
      title: 'Transfiere a otras cuentas',
      options: {
        successive: true,
        nameBtnFinally: 'Transferir'
      },
      data: [{
        titleName: 'Cuenta Origen',
        value: '',
        content: this.contentOriginAccount,
      },
      {
        titleName: 'Cuenta Destino',
        value: '',
        content: this.contentDestinyAccount,
      },
      {
        titleName: 'Valor',
        value: '',
        content: this.contentValueTransfer,
      }
      ]
    }
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

  clickTransaction(): void{

  }

}

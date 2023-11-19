import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IDataExpansionPanel } from 'src/app/Interfaces/IDataExpansionPanel.interface';
import { ITxAccounts } from 'src/app/Interfaces/ITxAccounts.interface';
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
  dataPanel!: IDataExpansionPanel;
  listAcounts!: any; //TODO modelar
  acountOrigen!: any; //TODO modelar
  acountDestiny!: any; //TODO modelar
  acountValue!: any; //TODO modelar
  loader = true;
  txSuccess = false;
  dataSuccess!: ITxAccounts;

  @ViewChild('contentOriginAccount') contentOriginAccount!: TemplateRef<any>;
  @ViewChild('contentDestinyAccount') contentDestinyAccount!: TemplateRef<any>;
  @ViewChild('contentValueTransfer') contentValueTransfer!: TemplateRef<any>;

  constructor(
    public formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private acountsService: AcountsService,
    private changeDetectorRef: ChangeDetectorRef
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
    this.loader = true;
    this.activatedRoute.queryParams.subscribe((e: any) => {
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
    this.getUserAccountsWithToken();
    this.loader = false;
  }

  getUserAccountsWithToken(): void{
    this.acountsService.getAccountsWithToken().subscribe(e => {
      this.listAcounts = e;
    })
  }

  ngAfterViewInit() {
    this.dataPanel = {
      title: 'Transfiere a otras cuentas',
      options: {
        successive: true,
        required: false,
        nameBtnFinally: 'Transferir'
      },
      data: [{
        titleName: 'Cuenta Origen',
        value: this.acountOrigen,
        content: this.contentOriginAccount,
        valid: (this.acountOrigen !== '' && this.acountOrigen)
      },
      {
        titleName: 'Cuenta Destino',
        value: this.acountDestiny,
        content: this.contentDestinyAccount,
      },
      {
        titleName: 'Valor',
        value: this.acountValue,
        content: this.contentValueTransfer,
      }
      ]
    }
    this.changeDetectorRef.detectChanges();
  }

  submit(): void {
    this.loader = true;
    const dataToTransfer = { cantTranfer: this.acountValue + '', destinyNumber: this.acountDestiny + '', originNumber: this.acountOrigen + '' };
    this.acountsService.transferToAcount(dataToTransfer).subscribe((e:any) => {
      if(e.status === 0){
        this.dataSuccess = {
          origin: this.acountOrigen,
          destiny: this.acountDestiny,
          value: this.acountValue
        }
        this.txSuccess = true;
      }
      this.tittle = 'Transacción realizada';
      this.loader = false;
    }, error => { 
      this.loader = false;
      this.tittle = 'Transacción fallida';
    });

  }

  clickTransaction(): void{
    this.submit();
    this.ngAfterViewInit();
  }

  updateDataLabel(){
    this.ngAfterViewInit();
  }

}

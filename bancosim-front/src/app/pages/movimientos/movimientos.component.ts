import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IMovementsRequestDTO } from 'src/app/Interfaces/IMovementsRequestDTO.interface';
import { URLS } from 'src/app/const/URLS';
import { TYPERTX } from 'src/app/const/TYPETX';
import { MovementsService } from 'src/app/services/movements.service';
import { AcountsService } from 'src/app/services/acounts.service';
import { IDataExpansionPanel } from 'src/app/Interfaces/IDataExpansionPanel.interface';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit, OnChanges {

  public movimientos!: Array<IMovementsRequestDTO>;
  public loader = false;
  @Input() dataAcount!: string;
  public URLS = URLS;
  public accountOrigin!: string;
  public TYPERTX = TYPERTX;
  listAcounts!: any;
  dataPanel!: IDataExpansionPanel;

  @ViewChild('contentOriginAccount') contentOriginAccount!: TemplateRef<any>;

  constructor(private movementsService: MovementsService,
    private route: Router,
    private acountsService: AcountsService,
    private changeDetectorRef: ChangeDetectorRef) {
    this.loader = true;
    try {
      const accountMov = this.route.getCurrentNavigation()?.extras.queryParams!["accountMov"];
      this.accountOrigin = accountMov;
      if (accountMov) {
        this.movementsService.getMovementsByAccount(accountMov).subscribe((res: any) => {
          this.movimientos = res;
          this.loader = false;
        }
        );
      }
    } catch (error) {
      this.route.navigate([URLS.INIT]);
    }
  }

  ngOnInit(): void {
    this.getUserAccountsWithToken();
  }

  getUserAccountsWithToken(): void{
    this.acountsService.getAccountsWithToken().subscribe(e => {
      this.listAcounts = e;
      this.loader = false;
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["dataAcount"]) {
      this.loader = false;
      this.movementsService.getMovementsByAccount(this.dataAcount).subscribe(() => {
      }
      );
    }
  }

  clickFinal(){
    this.loader = true;
    this.movementsService.getMovementsByAccount(this.accountOrigin).subscribe((res: any) => {
      this.movimientos = res;
      this.loader = false;
    });
    this.changeDetectorRef.detectChanges();
  }

}

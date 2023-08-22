import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { IMovementsRequestDTO } from 'src/app/Interfaces/IMovementsRequestDTO.interface';
import { URLS } from 'src/app/const/URLS';
import { MovementsService } from 'src/app/services/movements.service';

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

  constructor(private movementsService: MovementsService, private route: Router) {
    this.loader = true;
    try {
      const accountMov = this.route.getCurrentNavigation()?.extras.queryParams!["accountMov"];
      console.log("accountMov: " + accountMov);
      if (accountMov) {
        this.movementsService.getMovementsByAccount(accountMov).subscribe((res: any) => {
          console.log(res);
          this.movimientos = res;
          this.loader = false;
        }
        );
      } else {
        this.route.navigate([URLS.INIT]);
      }
    } catch (error) {
      console.log(error)
      this.route.navigate([URLS.INIT]);
    }
    console.log('ejemplo')
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["dataAcount"]) {
      this.loader = false;
      this.movementsService.getMovementsByAccount(this.dataAcount).subscribe((res) => {
        console.log(res);
      }
      );
    }
  }





}

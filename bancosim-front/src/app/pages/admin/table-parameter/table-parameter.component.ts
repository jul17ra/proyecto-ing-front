import { Component, OnInit } from '@angular/core';
import { ParametersService } from 'src/app/services/parameters.service';

@Component({
  selector: 'app-table-parameter',
  templateUrl: './table-parameter.component.html',
  styleUrls: ['./table-parameter.component.css']
})
export class TableParameterComponent implements OnInit {

  public dataParameterSecurity!: Array<any>;

  constructor(private parameterService: ParametersService) { }

  ngOnInit(): void {

    this.parameterService.getSecurityParams('SEGURITY').subscribe(
      (res: any) => {
        this.dataParameterSecurity = res;
        console.log(this.dataParameterSecurity)
      }
    );
  }

}

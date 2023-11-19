import { Component, OnInit } from '@angular/core';
import { ParametersService } from 'src/app/services/parameters.service';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  constructor(private parameterService: ParametersService) { }

  ngOnInit(): void {
    try {
      this.parameterService.getSecurityParamsActive('SEGURITY').subscribe(
        (res: any) => {
          console.log('--------- [seguridad] :', res[0].key, ' ----------')
          sessionStorage.setItem('security', res[0].key);
        }
      );
    } catch (error) {
      console.log('No se determino nivel de seguridad queda en nivel bajo por defecto.');
    }
  }

}

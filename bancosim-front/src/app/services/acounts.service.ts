import { Injectable } from '@angular/core';
import { TranferToAccountDTO } from '../model/DTOs/TransferToAccountDTO.interface';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AcountsService {

  constructor(private httpCore: HttpService) { }

  transferToAcount(tranferToAccount: TranferToAccountDTO){
    this.httpCore.apiPost('/transferToAcount', tranferToAccount);
  }
}

import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { IGenericRequest } from '../Interfaces/IGenericRequest.interface';
import { IMovementsRequestDTO } from '../Interfaces/IMovementsRequestDTO.interface';

@Injectable({
  providedIn: 'root'
})
export class MovementsService {

  constructor(private httpCore: HttpService) { }

  public insertMovement(movement: IMovementsRequestDTO){
    return this.httpCore.apiPost('/movements/insertMovement', movement);
  }

  public getMovementsByAccount(data: string){
    let genericRequest: IGenericRequest<string>;
    genericRequest = {
      data,
      message: 'obtener informacion de los movimientos de la cuenta: '.concat(data),
      state: 0
    }
    return this.httpCore.apiPost('/movements/getMovementsByAccount', genericRequest);
  }
}

import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  API = '/request'

  constructor(private httpCore: HttpService) { }

  getListRequest() {
    return this.httpCore.apiGet(this.API.concat('/getDataRequests'));
  }

  getDataInfoRequest() {
    return this.httpCore.apiGet(this.API.concat('/getDataInfoRequest'));
  }

  getDataToChartColumn() {
    return this.httpCore.apiGet(this.API.concat('/getDataToChartColumn'));
  }

}

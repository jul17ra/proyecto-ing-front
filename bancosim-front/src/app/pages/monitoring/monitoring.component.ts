import { Component, OnInit } from '@angular/core';
// import * as Highcharts from 'highcharts';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent implements OnInit {
  [x: string]: any;
  public requestData!: Array<any>;
  public requestDataInfo!: Array<any>;
  // highcharts = Highcharts;
//   chartOptions = {         
//     title : {
//        text: 'Scatter plot'   
//     },      
//     series : [{
//        type: 'scatter',
//        zoomType:'xy',
//        name: 'Browser share',
//        data: [ 1, 1.5, 2.8, 3.5, 3.9, 4.2 ]
//     }]
//  };

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.requestService.getListRequest().subscribe(
      (res: any) => {
        console.log(res)
        this.requestData = res;
      }
    );
    this.requestService.getDataInfoRequest().subscribe(
      (res: any) => {
        console.log(res)
        this.requestDataInfo = res;
      }
    );
  }



}

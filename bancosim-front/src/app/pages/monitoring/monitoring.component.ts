import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent implements OnInit {
  public requestData!: Array<any>;
  public requestDataInfo!: Array<any>;
  public requestChartColumn!: any;
  public highCharts = Highcharts;
  private COLORFONTCHARTS = 'white';
  private BACKGROUNDFONTCHARTS = 'transparent';
  
  constructor(private requestService: RequestService, private changeDetectorRef: ChangeDetectorRef) { }

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
    this.requestService.getDataToChartColumn().subscribe(
      (res: any) => {
        console.log(res.series);
        this.requestChartColumn = res;
        this.renderChartColumn();
        this.renderChartpie();
        this.changeDetectorRef.detectChanges();
      }
    );

  }

  private renderChartColumn(): void {
    Highcharts.chart('column', {
      chart: {
        type: 'column',
        backgroundColor: this.BACKGROUNDFONTCHARTS,
        
      },
      title: {
        text: 'Cantidad de solicitudes segun el nivel de seguridad.',
        style: {
          color: this.COLORFONTCHARTS // Cambiar color del texto del título
        }
      },
      xAxis: {
        categories: ['200', '400', '404', '500'],
        title: {
          text: 'Status HTTP',
          style: {
            color: this.COLORFONTCHARTS
          }
        },
        labels: {
          style: {
            color: this.COLORFONTCHARTS
          }
        }
      },
      yAxis: {
        title: {
          text: 'Cantidad de peticiones',
          style: {
            color: this.COLORFONTCHARTS
          }
        },
        labels: {
          style: {
            color: this.COLORFONTCHARTS
          }
        }
      },
      legend: {
        itemStyle: {
          color: this.COLORFONTCHARTS // Cambiar color del texto de la leyenda
        }
      },
      colors: this.requestChartColumn.colors,
      series: this.requestChartColumn.series
    });
  }

  renderChartpie() {
    Highcharts.chart('pie', {
      chart: {
        type: 'pie',
        backgroundColor: this.BACKGROUNDFONTCHARTS,
        borderColor: 'red',
        style: {
          color: 'red'
        }
      },
      title: {
        text: 'Cantidad de solicitudes segun el nivel de seguridad.',
        style: {
          color: this.COLORFONTCHARTS // Cambiar color del texto del título
        }
      },

      legend: {
        backgroundColor: 'red',
        itemStyle: {
          color: this.COLORFONTCHARTS // Cambiar color del texto de la leyenda
        }
      },
      // colors: this.requestChartColumn.colors,
      series: [{
        name: 'Brands',
        type: 'pie',
        data: [
          { name: 'Chrome', y: 61.41 , color: 'red', borderColor: 'yellow'},
          { name: 'Internet Explorer', y: 11.84 },
          { name: 'Firefox', y: 10.85 },
          { name: 'Edge', y: 4.67 },
          { name: 'Safari', y: 4.18 },
          { name: 'Other', y: 7.05 }
        ]
      }]
    });
  }



}

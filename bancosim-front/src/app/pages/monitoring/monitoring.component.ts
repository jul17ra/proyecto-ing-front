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
  public requestChartPiePrincipal!: Array<any>;
  public requestChartPieSecundary!: Array<any>;
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

        this.changeDetectorRef.detectChanges();
      }
    );

    this.requestService.getDataInfoPorcenRequest().subscribe(
      (res: any) => {
        console.log(res);
        this.requestChartPiePrincipal = res.principalData;
        this.requestChartPieSecundary = res.secundaryData;
        this.renderChartpie();
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
      },
      title: {
        text: 'Cantidad de solicitudes segun el nivel de seguridad.',
        style: {
          color: this.COLORFONTCHARTS // Cambiar color del texto del título
        }
      },

      legend: {
        itemStyle: {
          color: this.COLORFONTCHARTS // Cambiar color del texto de la leyenda
        }
      },
      // colors: this.requestChartColumn.colors,
      series: [{
        name: 'Status',
        type: 'pie',
        size: '45%',
        dataLabels: {
          color: '#ffffff',
          distance: '-50%'
      },
        data: this.requestChartPiePrincipal
      }, {
        name: 'Status - nivel de seguridad',
        data: this.requestChartPieSecundary,
        size: '80%',
        innerSize: '60%',
        type: 'pie',
        dataLabels: {
            format: '<b>{point.name}:</b> <span style="opacity: 0.5">{y}%</span>',
            filter: {
                property: 'y',
                operator: '>',
                value: 1
            },
            style: {
                fontWeight: 'normal'
            }
        },
        id: 'versions'
    }]
    });
  }

}

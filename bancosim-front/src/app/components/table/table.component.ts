import { Component, Input, OnInit } from '@angular/core';
import { ITableData } from 'src/app/Interfaces/ITableData.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() dataTable!: ITableData

  constructor() { }

  ngOnInit(): void {

  }

}

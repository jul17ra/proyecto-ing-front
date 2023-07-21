import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { emit } from 'process';
import { IDataExpansionPanel } from 'src/app/Interfaces/IDataExpansionPanel.interface';

@Component({
  selector: 'expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css']
})
export class ExpansionPanelComponent implements OnInit, OnChanges {

  @Input() data!: IDataExpansionPanel;
  @Output() eventFinalBtn = new EventEmitter<any>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['data']){

    }
  }

  ngOnInit(): void {
    this.data = {
      title: 'Example'
    }
  }

  backPanel(index: number){
    this.data.data![index].open = false;
    this.data.data![index - 1].open = true;
  }

  nextPanel(index: number){
    this.data.data![index].open = false;
    this.data.data![index + 1].open = true;
  }

  finalPanel(index: number){
    this.data.data![index].open = false;
    if(this.data){
      this.eventFinalBtn.emit();
    }
  }



}

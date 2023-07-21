import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { IDataExpansionPanel } from 'src/app/Interfaces/IDataExpansionPanel.interface';

@Component({
  selector: 'expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css']
})
export class ExpansionPanelComponent implements OnInit, OnChanges {

  @Input() data!: IDataExpansionPanel;
  @Output() eventFinalBtn!: EventEmitter<IDataExpansionPanel>;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['data']){
      if(this.data.options?.successive){

      }
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
    this.eventFinalBtn.emit(this.data!);
  }



}

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
  @Output() eventBackBtn = new EventEmitter<any>();
  @Output() eventNextBtn = new EventEmitter<any>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['data']){
      console.log('req: ', this.data.options?.required);
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
    this.eventBackBtn.emit();
  }

  nextPanel(index: number){
    if(this.data.options?.required){
      //Aqui va cuando requiere una validación del campo
    } else {
      this.eventNextBtn.emit();
      this.data.data![index].open = false;
      this.data.data![index + 1].open = true;
    }
  }

  finalPanel(index: number){
    this.data.data![index].open = false;
    if(this.data){
      this.eventFinalBtn.emit();
    }
  }



}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  @Input() checkStatus = false;
  @Output() eventCheck = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  emitValue(event: any){
    this.eventCheck.emit(event.target.checked);
  }

}

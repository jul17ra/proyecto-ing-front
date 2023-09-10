import { Component, Input, OnInit } from '@angular/core';
import { ITxAccounts } from 'src/app/Interfaces/ITxAccounts.interface';

@Component({
  selector: 'success-resume',
  templateUrl: './success-resume.component.html',
  styleUrls: ['./success-resume.component.css']
})
export class SuccessResumeComponent implements OnInit {

  @Input() data!:ITxAccounts;

  constructor() { }

  ngOnInit(): void {
  }

}

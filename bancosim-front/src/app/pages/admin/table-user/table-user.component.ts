import { Component, OnInit } from '@angular/core';
import { FinalUserDTO } from 'src/app/model/DTOs/FinalUserDTO.interface';
import { FinalUser } from 'src/app/model/FinalUser.interface';
import { FinalUserService } from 'src/app/services/final-user.service';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css']
})
export class TableUserComponent implements OnInit {

  public dataUsers!: Array<FinalUser>;

  constructor(private finalUserService: FinalUserService) { }

  ngOnInit(): void {
    this.finalUserService.getUsersByRoleToken().subscribe((res: any) => {
      console.log(res);
      this.dataUsers = res;
    })
  }

}

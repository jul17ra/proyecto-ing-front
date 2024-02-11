import { Component, OnInit } from '@angular/core';
import { IPermitDataDTO } from 'src/app/model/DTOs/PermitDataDTO.interface';
import { PermitRoleService } from 'src/app/services/permit-role.service';

@Component({
  selector: 'app-table-permit',
  templateUrl: './table-permit.component.html',
  styleUrls: ['./table-permit.component.css']
})
export class TablePermitComponent implements OnInit {

  public permitData!:Array<IPermitDataDTO>;

  constructor(private permitRoleService: PermitRoleService) { }

  ngOnInit(): void {
    this.permitRoleService.getPermitByRoleAdmin().subscribe((res: any) => {
      console.log(res);
      this.permitData = res;
    });
  }

}

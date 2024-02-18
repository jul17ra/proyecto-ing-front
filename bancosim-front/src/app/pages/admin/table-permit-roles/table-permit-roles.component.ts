import { Component, OnInit } from '@angular/core';
import { PermitRoleService } from 'src/app/services/permit-role.service';

@Component({
  selector: 'app-table-permit-roles',
  templateUrl: './table-permit-roles.component.html',
  styleUrls: ['./table-permit-roles.component.css']
})
export class TablePermitRolesComponent implements OnInit {

  public listDataPermitRoles!: Array<any>;

  constructor(private permitRoleService:PermitRoleService) { }

  ngOnInit(): void {
    this.permitRoleService.getRolesAndPermitsByUser().subscribe((res)=> {
      console.log(res)
      this.listDataPermitRoles = res as Array<any>;

    });
  }

}

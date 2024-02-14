import { Component, OnInit } from '@angular/core';
import { IRolListDTO } from 'src/app/model/DTOs/RolDataDTO.interface';
import { PermitRoleService } from 'src/app/services/permit-role.service';

@Component({
  selector: 'app-table-role',
  templateUrl: './table-role.component.html',
  styleUrls: ['./table-role.component.css']
})
export class TableRoleComponent implements OnInit {

  protected title = [
    'Role',
    'Estado',
    'Editar',
    'Eliminar'
  ];
  rolData! : Array<IRolListDTO>;

  constructor(private permitRoleService: PermitRoleService) { }

  ngOnInit(): void {
    this.permitRoleService.getRolesToPermit().subscribe((res: any) => {
      console.log(res);
      this.rolData = res;
    })
  }

}

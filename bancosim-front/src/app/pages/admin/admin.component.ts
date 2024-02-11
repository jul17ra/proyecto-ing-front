import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IDataExpansionPanel } from 'src/app/Interfaces/IDataExpansionPanel.interface';
import { PermitRoleService } from 'src/app/services/permit-role.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public loader = false;
  dataPanel!: IDataExpansionPanel;
  @ViewChild('viewRoles') viewRoles!: TemplateRef<any>;
  @ViewChild('viewUsuarios') viewUsuarios!: TemplateRef<any>;
  @ViewChild('viewPermisos') viewPermisos!: TemplateRef<any>;
  @ViewChild('viewRolesPermisos') viewRolesPermisos!: TemplateRef<any>;
  @ViewChild('ViewUsuariosPermisos') ViewUsuariosPermisos!: TemplateRef<any>;

  constructor(public router: Router,
     private changeDetectorRef: ChangeDetectorRef,
     private permitRoleService: PermitRoleService) {}

  ngOnInit(): void {
    this.ngAfterViewInit();
    this.permitRoleService.getPermitByRoleAdmin().subscribe((res: any) => {
      console.log(res);
    });
  }

  ngAfterViewInit() {
    this.dataPanel = {
      title: 'Cree actualice o elimine la informacion que se requiera',
      options: {
        successive: true,
        required: false,
        nameBtnFinally: 'Actualizar'
      },
      data: [{
        titleName: 'Roles',
        content: this.viewRoles,
      },
      {
        titleName: 'Usuario',
        content: this.viewUsuarios,
      },
      {
        titleName: 'Permisos',
        content: this.viewPermisos,
      }
      ,
      {
        titleName: 'Roles - Permisos',
        content: this.viewRolesPermisos,
      }
      ,
      {
        titleName: 'Usuarios - Permisos',
        content: this.ViewUsuariosPermisos,
      }
      ]
    }
    this.changeDetectorRef.detectChanges();
  }

}

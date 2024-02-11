import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePermitRolesComponent } from './table-permit-roles.component';

describe('TablePermitRolesComponent', () => {
  let component: TablePermitRolesComponent;
  let fixture: ComponentFixture<TablePermitRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePermitRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePermitRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePermitComponent } from './table-permit.component';

describe('TablePermitComponent', () => {
  let component: TablePermitComponent;
  let fixture: ComponentFixture<TablePermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

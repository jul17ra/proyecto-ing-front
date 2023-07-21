import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAppComponent } from './input-app.component';

describe('InputAppComponent', () => {
  let component: InputAppComponent;
  let fixture: ComponentFixture<InputAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

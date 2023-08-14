import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessResumeComponent } from './success-resume.component';

describe('SuccessResumeComponent', () => {
  let component: SuccessResumeComponent;
  let fixture: ComponentFixture<SuccessResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

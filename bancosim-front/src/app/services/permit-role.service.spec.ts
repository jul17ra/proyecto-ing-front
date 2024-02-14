import { TestBed } from '@angular/core/testing';

import { PermitRoleService } from './permit-role.service';

describe('PermitRoleService', () => {
  let service: PermitRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermitRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

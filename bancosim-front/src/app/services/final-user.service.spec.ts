import { TestBed } from '@angular/core/testing';

import { FinalUserService } from './final-user.service';

describe('FinalUserService', () => {
  let service: FinalUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinalUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

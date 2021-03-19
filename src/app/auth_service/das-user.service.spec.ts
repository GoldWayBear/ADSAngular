import { TestBed } from '@angular/core/testing';

import { DasUserService } from './das-user.service';

describe('DasUserService', () => {
  let service: DasUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DasUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

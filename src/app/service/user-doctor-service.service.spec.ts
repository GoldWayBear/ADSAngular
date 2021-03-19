import { TestBed } from '@angular/core/testing';

import { UserDoctorServiceService } from './user-doctor-service.service';

describe('UserDoctorServiceService', () => {
  let service: UserDoctorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDoctorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

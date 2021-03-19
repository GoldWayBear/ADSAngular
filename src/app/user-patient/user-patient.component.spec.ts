import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPatientComponent } from './user-patient.component';

describe('UserPatientComponent', () => {
  let component: UserPatientComponent;
  let fixture: ComponentFixture<UserPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

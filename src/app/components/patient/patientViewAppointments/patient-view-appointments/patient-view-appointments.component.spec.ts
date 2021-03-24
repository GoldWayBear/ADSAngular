import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientViewAppointmentsComponent } from './patient-view-appointments.component';

describe('PatientViewAppointmentsComponent', () => {
  let component: PatientViewAppointmentsComponent;
  let fixture: ComponentFixture<PatientViewAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientViewAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientViewAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

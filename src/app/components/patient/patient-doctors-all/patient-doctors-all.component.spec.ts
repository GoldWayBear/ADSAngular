import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDoctorsAllComponent } from './patient-doctors-all.component';

describe('PatientDoctorsAllComponent', () => {
  let component: PatientDoctorsAllComponent;
  let fixture: ComponentFixture<PatientDoctorsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDoctorsAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDoctorsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

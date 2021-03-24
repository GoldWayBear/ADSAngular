import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientViewBillsComponent } from './patient-view-bills.component';

describe('PatientViewBillsComponent', () => {
  let component: PatientViewBillsComponent;
  let fixture: ComponentFixture<PatientViewBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientViewBillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientViewBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

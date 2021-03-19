import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsAllComponent } from './doctors-all.component';

describe('DoctorsAllComponent', () => {
  let component: DoctorsAllComponent;
  let fixture: ComponentFixture<DoctorsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

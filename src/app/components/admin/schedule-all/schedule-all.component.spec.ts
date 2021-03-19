import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleAllComponent } from './schedule-all.component';

describe('ScheduleAllComponent', () => {
  let component: ScheduleAllComponent;
  let fixture: ComponentFixture<ScheduleAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewAppointmentComponent } from './preview-appointment.component';

describe('PreviewAppointmentComponent', () => {
  let component: PreviewAppointmentComponent;
  let fixture: ComponentFixture<PreviewAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

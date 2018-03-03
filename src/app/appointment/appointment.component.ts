import { Component, OnInit } from '@angular/core';
import {AppointmentService} from '../appointment.service';
import {Appointment} from '../appointment';
import {MatDatepickerInputEvent} from '@angular/material';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  constructor(
    private appointmentService: AppointmentService,
  ) { }
  appointmentsList: Appointment[];
  appointmentsListByDate: Appointment[];
  private date: Date;
  getAppointments() {
    this.appointmentsList = this.appointmentService.getAppointments();
  }
  getAppointmentsByDate() {
    this.appointmentsListByDate = this.appointmentService.getAppointmentsByDay(this.date);

  }
  getDate(input: MatDatepickerInputEvent<Date>) {
    if (input == null) {
      this.date = null;
    }else {
      this.date = input.value;
    }
    console.log(this.date);
  }
  ngOnInit() {
    this.getAppointmentsByDate();
  }
}

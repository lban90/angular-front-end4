import { Component, OnInit } from '@angular/core';
import {AppointmentService} from '../appointment.service';
import {Appointment} from '../appointment';

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
  getAppointments() {
    this.appointmentsList = this.appointmentService.getAppointments();
  }

  ngOnInit() {
    this.getAppointments();
  }

}

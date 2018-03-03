import { Injectable } from '@angular/core';
import {Appointment} from './appointment';
import {APPOINTMSNTS} from './mock-file';

@Injectable()
export class AppointmentService {

  constructor() { }
  public appointmentsList: Appointment[] = [];
  private appointmentsListByDate: Appointment[]= [];
  getAppointments(): Appointment[] {
    return APPOINTMSNTS;
  }
  getAppointmentsByDay(date: Date): Appointment[] {
    this.appointmentsList = this.getAppointments();
    this.appointmentsListByDate = [];
    if (date == null) {
      return this.getAppointments();
    }else {
      for (let i = 0; i < this.getAppointments().length; i++) {
        if (date.getDate() === this.appointmentsList[i].appointment_date.getDate() &&
          date.getMonth() === this.appointmentsList[i].appointment_date.getMonth() &&
          date.getFullYear() === this.appointmentsList[i].appointment_date.getFullYear()) {
          this.appointmentsListByDate.push(this.appointmentsList[i]);
          console.log(date.getDate());
          console.log(this.appointmentsList[i].appointment_date.getDate());
          console.log(date.getMonth());
          console.log(this.appointmentsList[i].appointment_date.getMonth());
          console.log(date.getFullYear());
          console.log(this.appointmentsList[i].appointment_date.getFullYear());
        }
      }
      return this.appointmentsListByDate;
    }
  }

}

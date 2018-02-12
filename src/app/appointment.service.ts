import { Injectable } from '@angular/core';
import {Appointment} from './appointment';
import {APPOINTMSNTS} from './mock-file';

@Injectable()
export class AppointmentService {

  constructor() { }
  getAppointments(): Appointment[] {
    return APPOINTMSNTS;
}

}

import { Item } from './item';
import { Client } from './client';
import { Receipt } from './receipt';
import {Appointment} from './appointment';

export const ITEMS: Item[] = [
  {id: 1, manufacturer: 'Zeiss', name: 'Lentila', descripion: 'convexa'},
  {id: 2, manufacturer: 'Zeiss', name: 'Lentila', descripion: 'concava'},
  {id: 3, manufacturer: 'Laica', name: 'Lentila', descripion: 'convexa'},
  {id: 4, manufacturer: 'Laica', name: 'Lentila', descripion: 'concava'},
];

export const CLIENTS: Client[] = [
  {id: 1, firstName: 'Ioan', lastName: 'Popa'},
  {id: 2, firstName: 'Ioana', lastName: 'Popa'},
  {id: 3, firstName: 'Ana', lastName: 'Pop'},
  {id: 4, firstName: 'Ioan', lastName: 'Pop'},
];

export  const RECEIPTS: Receipt[] = [
  {id: 1, description: 'Picaturi ochi 1'},
  {id: 2, description: 'Picaturi ochi 2'},
  {id: 3, description: 'Picaturi ochi 3'},
  {id: 4, description: 'Picaturi ochi 4'},
];

export const APPOINTMSNTS: Appointment[] = [
  {appointment_id: 1, appointment_name: 'Programare consult', appointment_client_first_name: 'Ioan',
    appointment_client_last_name: 'Popa', appointment_type: 'investiagtion',
    appointment_description: 'Problema la pleoapa', appointment_concluzion: 'durere',
    appointment_date: new Date('02/04/2018'), appointment_hour: '14:00', appointment_status: 'completed'},
  {appointment_id: 7, appointment_name: 'Programare consult', appointment_client_first_name: 'Ioan',
    appointment_client_last_name: 'Pop', appointment_type: 'investiagtion',
    appointment_description: 'Problema la pleoapa', appointment_concluzion: 'rosu',
    appointment_date: new Date('02/04/2018'), appointment_hour: '15:00', appointment_status: 'completed'},
  {appointment_id: 8, appointment_name: 'Programare consult', appointment_client_first_name: 'Ana',
    appointment_client_last_name: 'Pop', appointment_type: 'investiagtion',
    appointment_description: 'Problema la pleoapa', appointment_concluzion: 'rosu'
    , appointment_date: new Date('02/04/2018'), appointment_hour: '16:00', appointment_status: 'completed'},
  {appointment_id: 2, appointment_name: 'Programare consult', appointment_client_first_name: 'Ioan',
    appointment_client_last_name: 'Popa', appointment_type: 'investiagtion',
    appointment_description: 'Problema la pleoapa', appointment_concluzion: 'durere'
    , appointment_date: new Date('02/05/2018'),
    appointment_hour: '15:00', appointment_status: 'completed'},
  {appointment_id: 3, appointment_name: 'Programare consult', appointment_client_first_name: 'Ioan',
    appointment_client_last_name: 'Popa', appointment_type: 'investiagtion',
    appointment_description: 'Problema la pleoapa', appointment_concluzion: 'durere',
    appointment_date: new Date('02/06/2018'),
    appointment_hour: '16:00', appointment_status: 'completed'},
  {appointment_id: 4, appointment_name: 'Programare consult', appointment_client_first_name: 'Ioan',
    appointment_client_last_name: 'Popa', appointment_type: 'investiagtion',
    appointment_description: 'Problema la pleoapa', appointment_concluzion: '',
    appointment_date: new Date('02/07/2018'),
    appointment_hour: '17:00', appointment_status: 'work in progress'},
  {appointment_id: 1, appointment_name: 'Programare consult', appointment_client_first_name: 'Ioan',
    appointment_client_last_name: 'Popa', appointment_type: 'investiagtion',
    appointment_description: 'Problema la pleoapa', appointment_concluzion: 'durere',
    appointment_date: new Date('02/04/2018'), appointment_hour: '14:00', appointment_status: 'completed'},
  {appointment_id: 7, appointment_name: 'Programare consult', appointment_client_first_name: 'Ioan',
    appointment_client_last_name: 'Pop', appointment_type: 'investiagtion',
    appointment_description: 'Problema la pleoapa', appointment_concluzion: 'rosu',
    appointment_date: new Date('02/04/2018'), appointment_hour: '15:00', appointment_status: 'completed'},
  {appointment_id: 8, appointment_name: 'Programare consult', appointment_client_first_name: 'Ana',
    appointment_client_last_name: 'Pop', appointment_type: 'investiagtion',
    appointment_description: 'Problema la pleoapa', appointment_concluzion: 'rosu'
    , appointment_date: new Date('02/04/2018'), appointment_hour: '16:00', appointment_status: 'completed'},
  {appointment_id: 2, appointment_name: 'Programare consult', appointment_client_first_name: 'Ioan',
    appointment_client_last_name: 'Popa', appointment_type: 'investiagtion',
    appointment_description: 'Problema la pleoapa', appointment_concluzion: 'durere'
    , appointment_date: new Date('02/05/2018'),
    appointment_hour: '15:00', appointment_status: 'completed'},
  {appointment_id: 3, appointment_name: 'Programare consult', appointment_client_first_name: 'Ioan',
    appointment_client_last_name: 'Popa', appointment_type: 'investiagtion',
    appointment_description: 'Problema la pleoapa', appointment_concluzion: 'durere',
    appointment_date: new Date('02/06/2018'),
    appointment_hour: '16:00', appointment_status: 'completed'},
  {appointment_id: 4, appointment_name: 'Programare consult', appointment_client_first_name: 'Ioan',
    appointment_client_last_name: 'Popa', appointment_type: 'investiagtion',
    appointment_description: 'Problema la pleoapa', appointment_concluzion: '',
    appointment_date: new Date('02/07/2018'),
    appointment_hour: '17:00', appointment_status: 'work in progress'},
];

import { Injectable } from '@angular/core';
import {Client} from './client';
import {CLIENTS} from './mock-file';

@Injectable()
export class ClientService {

  constructor() { }
  getClients(): Client[] {
    return CLIENTS;
  }

}

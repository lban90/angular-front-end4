import { Component, OnInit } from '@angular/core';
import {ClientService} from '../client.service';
import {Client} from '../client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clientslist: Client[];
  constructor(
    private clientService: ClientService,
  ) { }
  getClients(): void {
    this.clientslist = this.clientService.getClients();
  }

  ngOnInit() {
    this.getClients();
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClientService} from '../client.service';
import {Client} from '../client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clientslist: Client[];
  @Input() message: string;
  @Input() message3: string;
  message2= 'hello world';
  message4= 'Ceao Lume';
  @Output() eventEmmiter= new EventEmitter<string>();
  @Output() eventEmmiter2= new EventEmitter<string>();
  constructor(
    private clientService: ClientService,
  ) { }
  getClients(): void {
    this.clientslist = this.clientService.getClients();
  }
   sendMessage() {
    this.eventEmmiter.emit(this.message2);
   }
  sendMessage2() {
    this.eventEmmiter2.emit(this.message4);
  }
  ngOnInit() {
    this.getClients();
  }

}

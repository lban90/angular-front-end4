import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  value= 'Test1';
  value2= 'Test2';
  ngOnInit() {
  }
  receiveMessage($event) {
    this.value = $event;
  }

}

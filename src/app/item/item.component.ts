 import { Component, OnInit } from '@angular/core';
import {ItemService} from '../item.service';
import {Item} from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(
    private itemService: ItemService,
  ) { }
  itemslist: Item[];
  value: number;
  randomFuction(): boolean {
    this.value = Math.random();
    if (this.value < 0.5) {
      return false;
    }else {
      return true;
    }
  }

  ngOnInit() {
    this.itemslist = this.itemService.getIems();
    console.log(this.itemslist);
  }

}

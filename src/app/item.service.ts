import { Injectable } from '@angular/core';
import { Item } from './item';
import { ITEMS } from './mock-file';

@Injectable()
export class ItemService {
  constructor() { }
  getIems(): Item[] {
    return ITEMS;
  }
}

import { Item } from './item';
import { Client } from './client';
import { Receipt } from './receipt';

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

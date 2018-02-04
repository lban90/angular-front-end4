import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ItemComponent} from '../item/item.component';
import {ClientComponent} from '../client/client.component';
import {HomeComponent} from '../home/home.component';
import {ReceiptComponent} from '../receipt/receipt.component';

const routes: Routes = [
  {
    path: 'item',
    component: ItemComponent
  },
  {
    path: 'client',
    component: ClientComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'receipt',
    component: ReceiptComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }

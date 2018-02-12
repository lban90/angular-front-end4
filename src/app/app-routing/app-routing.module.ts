import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ItemComponent} from '../item/item.component';
import {ClientComponent} from '../client/client.component';
import {HomeComponent} from '../home/home.component';
import {ReceiptComponent} from '../receipt/receipt.component';
import {AppointmentComponent} from '../appointment/appointment.component';

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
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'receipt',
    component: ReceiptComponent
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'appointment',
    component: AppointmentComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }

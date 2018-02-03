import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ItemComponent} from '../item/item.component';
import {ClientComponent} from '../client/client.component';
import {HomeComponent} from '../home/home.component';

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
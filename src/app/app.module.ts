import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { AppRoutingModule} from './app-routing/app-routing.module';
import {RouterModule} from '@angular/router';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { ReceiptComponent } from './receipt/receipt.component';
import {ItemService} from './item.service';
import {ReceiptService} from './receipt.service';
import {ClientService} from './client.service';
import {MatButtonModule} from '@angular/material';
import { AppointmentComponent } from './appointment/appointment.component';
import {AppointmentService} from './appointment.service';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ClientComponent,
    HomeComponent,
    ReceiptComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatButtonModule
  ],
  providers: [ItemService, ReceiptService, ClientService, AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

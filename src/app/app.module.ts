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
import {
  MatButtonModule, MatDatepickerModule, MatDatepickerToggle, MatFormFieldModule, MatIconModule, MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { AppointmentComponent } from './appointment/appointment.component';
import {AppointmentService} from './appointment.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



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
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatDatepickerModule,
    FormsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [ItemService, ReceiptService, ClientService, AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

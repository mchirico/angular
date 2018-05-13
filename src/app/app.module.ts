import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SeptaComponent } from './septa/septa.component';
import { DataDetailComponent } from './data-detail/data-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


import {HttpClientModule} from '@angular/common/http';
import {MapComponent, SafePipe} from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    SeptaComponent,
    DataDetailComponent,
    MessagesComponent,
    DashboardComponent,
    MapComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {SeptaComponent} from './septa/septa.component';
import {DataDetailComponent} from './data-detail/data-detail.component';
import {MessagesComponent} from './messages/messages.component';
import {AppRoutingModule} from './/app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthComponent} from './auth/auth.component';


import {HttpClientModule} from '@angular/common/http';
import {MapComponent, SafePipe} from './map/map.component';
import {SimpleFormComponent} from './simple-form/simple-form.component';
import {SimpleTargetComponent} from './simple-target/simple-target.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';

import {AngularFireAuthModule} from 'angularfire2/auth';


import {environment} from '../environments/environment';
import { ItemComponent } from './item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    SeptaComponent,
    DataDetailComponent,
    MessagesComponent,
    DashboardComponent,
    MapComponent,
    AuthComponent,
    SafePipe,
    SimpleFormComponent,
    SimpleTargetComponent,
    ItemComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

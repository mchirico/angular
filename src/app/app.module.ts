import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OneComponent } from './nav/one/one.component';
import { TwoComponent } from './nav/two/two.component';
import { ThreeComponent } from './nav/three/three.component';
import {AppRoutingModule} from './app-routing.module';
import { MainComponent } from './nav/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    NavbarComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

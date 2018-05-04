import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SeptaComponent } from './septa/septa.component';
import { DataDetailComponent } from './data-detail/data-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    SeptaComponent,
    DataDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

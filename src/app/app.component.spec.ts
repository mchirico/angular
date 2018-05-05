import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {SeptaComponent} from './septa/septa.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import { DataDetailComponent } from './data-detail/data-detail.component';

import {MessagesComponent} from './messages/messages.component';

import {AppRoutingModule} from './app-routing.module';
import {DataService} from './data.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MessageService} from './message.service';


import {
  RouterTestingModule
} from '@angular/router/testing';



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SeptaComponent,
        DataDetailComponent,
        MessagesComponent,
        DashboardComponent,
      ],
      providers: [DataService, AppRoutingModule,
         MessageService, ],

      imports: [
        BrowserModule,
        FormsModule,
        RouterTestingModule,
      ],

    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app');
  }));
});

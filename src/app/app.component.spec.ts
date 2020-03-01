import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import {FormsModule} from '@angular/forms';
import {ServersComponent} from './servers/servers.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ServerComponent,
        ServersComponent
      ],
      imports: [
      FormsModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular');
  });


});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SeptaComponent} from './septa.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {DataDetailComponent} from '../data-detail/data-detail.component';

import {DataService} from '../data.service';
import {MessageService} from '../message.service';
import {RouterTestingModule} from '@angular/router/testing';

import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';



describe('SeptaComponent', () => {

  let component: SeptaComponent;
  let fixture: ComponentFixture<SeptaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SeptaComponent,
        DataDetailComponent],
      providers: [MessageService, DataService],
      imports: [
        BrowserModule,
        FormsModule,
        RouterTestingModule,
        HttpClientModule,
      ],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeptaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });

  it('should create get from service', () => {
    fixture = TestBed.createComponent(SeptaComponent);

    const dataService = fixture.debugElement.injector.get(DataService);
    expect(dataService.getPeople()[0].name).toEqual('Douglas  Pace');
    expect(dataService.getPeople()).toEqual(component.people);

  });


});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { DataDetailComponent } from './data-detail.component';

import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';

describe('DataDetailComponent', () => {
  let component: DataDetailComponent;
  let fixture: ComponentFixture<DataDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDetailComponent ],
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
    fixture = TestBed.createComponent(DataDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

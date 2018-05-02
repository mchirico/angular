import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SeptaComponent} from './septa.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';


describe('SeptaComponent', () => {

  let component: SeptaComponent;
  let fixture: ComponentFixture<SeptaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SeptaComponent],
      imports: [
        BrowserModule,
        FormsModule
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
});

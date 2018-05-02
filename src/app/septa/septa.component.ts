import {Component, OnInit} from '@angular/core';
import {Data, Customer, IPerson} from '../data';


@Component({
  selector: 'app-septa',
  templateUrl: './septa.component.html',
  styleUrls: ['./septa.component.css']
})
export class SeptaComponent implements OnInit {

  hero: Data = {
    id: 1,
    name: 'Windstorm'
  };


  person: IPerson = {
    firstName: 'John',
    lastName: 'Smith',
    age: 23
  };


  cust = new Customer(this.person);


  constructor() {
  }

  ngOnInit() {
  }

}

import {Component, OnInit} from '@angular/core';
import {Hero, Customer, IPerson} from '../hero';


@Component({
  selector: 'app-septa',
  templateUrl: './septa.component.html',
  styleUrls: ['./septa.component.css']
})
export class SeptaComponent implements OnInit {

  hero: Hero = {
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

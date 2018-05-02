import {Component, OnInit} from '@angular/core';
import {Hero, Customer, IPerson} from '../data';
import {HEROES} from '../data/mock-data';


@Component({
  selector: 'app-septa',
  templateUrl: './septa.component.html',
  styleUrls: ['./septa.component.css']
})
export class SeptaComponent implements OnInit {

  heroes = HEROES;

  person: IPerson = {
    firstName: 'John',
    lastName: 'Smith',
    age: 23
  };

  cust = new Customer(this.person);

  selectedHero: Hero;

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

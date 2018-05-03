import {Component, OnInit} from '@angular/core';
import {Hero, Customer, IPerson} from '../data';
import {HEROES} from '../data/mock-data';


@Component({
  selector: 'app-septa',
  templateUrl: './septa.component.html',
  styleUrls: ['./septa.component.css']
})
export class SeptaComponent implements OnInit {

  people: any[] = [
    {
      'name': 'Douglas  Pace',
      'country': 'UK'
    },
    {
      'name': 'Mcleod  Mueller',
      'country': 'USA'
    },
  ];


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

  getColor(country) {
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
    }
  }

  getPaddingPC(country) {
    switch (country) {
      case 'UK':
        return '0.2em 0.2em 0.2em 0.2em';
      case 'USA':
        return '0.2em 0.2em 0.2em 0.2em';
      case 'HK':
        return '0.2em 0.2em 0.2em 0.2em';

    }
  }

  getMR(country) {
    switch (country) {
      case 'UK':
        return '15em';
      case 'USA':
        return '10em';
      case 'HK':
        return '15em';

    }
  }

  getColor2(name) {
    switch (name) {
      case 'Magneta':
        return 'green';
      case 'Narco':
        return 'blue';
      case 'Bombasto':
        return 'red';
    }
  }

  getBackground(name) {
    switch (name) {
      case 'Magneta':
        return 'blue';
      case 'Narco':
        return 'yellow';
      case 'Bombasto':
        return 'black';
    }
  }

  getPadding(name) {
    switch (name) {
      case 'Magneta':
        return '0.2em 0.2em 0.2em 0.2em';
      case 'Narco':
        return '0.8em 0.7em 0 0.7em';
      case 'Bombasto':
        return '0.2em 0.2em 0 0.2em';
    }
  }


}

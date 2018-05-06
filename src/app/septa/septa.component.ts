import {Component, OnInit} from '@angular/core';
import {Hero, Customer, IPerson, People} from '../data';


import {DataService} from '../data.service';
import {MessageService} from '../message.service';



@Component({
  selector: 'app-septa',
  templateUrl: './septa.component.html',
  styleUrls: ['./septa.component.css']
})
export class SeptaComponent implements OnInit {

  people: People[];
  heroes: Hero[];


  person: IPerson = {
    firstName: 'John',
    lastName: 'Smith',
    age: 23
  };

  cust = new Customer(this.person);

  selectedHero: Hero;

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  constructor(
              private dataService: DataService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.getHeroes();
    this.getPeople();
  }

  getHeroes(): void {
    this.dataService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  getPeople(): void {
    this.people = this.dataService.getPeople();
  }

  onSelect(hero: Hero): void {
    this.log(`hero: ${hero.name}`);
    this.messageService.add(`hero: ${hero.name}`);
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

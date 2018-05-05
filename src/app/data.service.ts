import {Injectable} from '@angular/core';
import {Hero, People} from './data';
import {HEROES, PEOPLE} from './data/mock-data';
import {MessageService} from './message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Fetch...');
    return of(HEROES);
  }

  getPeople(): People[] {
    return PEOPLE;
  }

  constructor(private messageService: MessageService) {
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}

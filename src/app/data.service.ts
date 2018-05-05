import {Injectable} from '@angular/core';
import {Hero, People} from './data';
import {HEROES, PEOPLE} from './data/mock-data';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getHeroes(): Hero[] {
    this.messageService.add('Fetch...');
    return HEROES;
  }

  getPeople(): People[] {
    return PEOPLE;
  }

  constructor(private messageService: MessageService) {
  }
}

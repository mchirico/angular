import {Injectable} from '@angular/core';
import {Hero, People} from './data';
import {HEROES, PEOPLE} from './data/mock-data';
import {MessageService} from './message.service';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private heroesUrl = 'https://us-central1-mchirico.cloudfunctions.net/getHeroes';

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** GET heroes from the server */
  getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
  }


  getPeople(): People[] {
    return PEOPLE;
  }

  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}

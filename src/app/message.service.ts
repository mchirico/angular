import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  len(): number {
    return this.messages.length;
  }

  pop() {
    this.messages.pop();
  }

  constructor() {
  }
}

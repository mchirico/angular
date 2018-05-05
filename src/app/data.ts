export class Hero {
  id: number;
  name: string;
}

export class People {
  name: string;
  country: string;
}

export interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
  ssn?: string;
}

export class Customer {
  p: IPerson;
  constructor(person: IPerson) {
    this.p = person;
  }
  test() {
    return 'test';
  }

  greet() {
    return `Hello, ${this.p.lastName}, ${this.p.firstName} `;
  }
}


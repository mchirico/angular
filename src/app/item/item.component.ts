import {Component} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface Item {
  name: string;
}

export interface ItemId extends Item {
  id: string;
}

@Component({
  selector: 'app-root',
  template: `
    <button (click)="clickAddItem()">Add item</button>
    <button (click)="deleteItem()">Delete item</button>
    <ul>
      <li *ngFor="let item of items | async">
        {{ item.name }} {{item.id}}
      </li>
    </ul>
  `
})
export class ItemComponent {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<ItemId[]>;

  let;
  idIndex = 3;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('Item');
    // this.items = this.itemsCollection.valueChanges();

    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );


  }

  addItem(item: Item) {
    // this.itemsCollection.add(item);

    this.idIndex += 1;
    this.itemsCollection.doc(this.idIndex.toString()).set(item);
  }

  deleteItem() {
    this.itemsCollection.doc(this.idIndex.toString()).delete();
    this.idIndex -= 1;
  }

  clickAddItem() {
    const myObj = {size: 10, name: 'Size 10 Object'};
    this.addItem(myObj);
  }
}

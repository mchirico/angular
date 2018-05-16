import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  dataElements = [{type: 'click', name: '', content: ''}];

  text0 = '';
  text1 = '';
  list = [];

  constructor() {
  }

  ngOnInit() {
  }

  callPushDataFromTarget(data: { name: string, content: string }) {
    this.dataElements.push({
      type: 'click',
      name: data.name,
      content: data.content
    });
    this.text0 = data.content;
  }

  onAddServer() {
    if (this.text0 === 'del') {
      this.list.pop();
    } else {
      this.list.push(this.text1);
    }

  }

}

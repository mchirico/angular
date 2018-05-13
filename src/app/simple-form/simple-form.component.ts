import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {


  text0 = '';
  text1 = '';
  list = [];

  constructor() {
  }

  ngOnInit() {
  }

  onAddServer() {
    if (this.text0 === 'del') {
      this.list.pop();
    } else {
      this.list.push(this.text1);
    }
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-simple-target',
  templateUrl: './simple-target.component.html',
  styleUrls: ['./simple-target.component.css']
})
export class SimpleTargetComponent implements OnInit {
  @Input() myInput = '';
  @Output() dataCreated = new EventEmitter<{ name: string, content: string }>();
  text0 = '';

  constructor() {
  }

  ngOnInit() {
  }


  onTarget() {
    this.dataCreated.emit({
      name: 'name',
      content: this.text0 + ' target',
    });
  }


}

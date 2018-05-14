import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-target',
  templateUrl: './simple-target.component.html',
  styleUrls: ['./simple-target.component.css']
})
export class SimpleTargetComponent implements OnInit {
  @Input() myInput = '';
  constructor() { }

  ngOnInit() {
  }

}

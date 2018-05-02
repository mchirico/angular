import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../data';
@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.css']
})
export class DataDetailComponent implements OnInit {

  @Input() data0: Hero;

  constructor() { }

  ngOnInit() {
  }

}

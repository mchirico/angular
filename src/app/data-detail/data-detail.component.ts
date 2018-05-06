import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../data';


import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {DataService} from '../data.service';



@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.css']
})
export class DataDetailComponent implements OnInit {

  @Input() data0: Hero;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getHero(id)
      .subscribe(hero => this.data0 = hero);
  }

  goBack(): void {
    this.location.back();
  }

}

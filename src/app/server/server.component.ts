import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';

function t(i) {
  interval(1000).subscribe(() => {
    console.log('test');
  });
  return i + 1;
}

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  m = 0;

  constructor() {
  }

  ngOnInit() {
    interval(1000).subscribe((count) => {
      this.m = count;
      console.log(count);
    });
  }

}

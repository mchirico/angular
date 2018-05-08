import {Component, OnInit} from '@angular/core';
import {Pipe, PipeTransform, NgModule} from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser';

@Pipe({name: 'safe'})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

  trustSrcUrl = function (data) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(data);
  };

  doSth() {
    console.log('Doing sth...');
  }

}

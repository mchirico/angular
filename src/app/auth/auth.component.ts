import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  data: string = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  test() {
    this.data = this.data + '..';
  }

  login() {
    //const url = 'https://cloud.aipiggybot.io/api/login';
    const url = '/api/login';
    this.http.post<any>(url, {title: 'Angular POST Request Example'})
      .subscribe(data => {
        this.data = data;
      });
  }

  stats() {
    const url = '/api/stats';
    this.http.post<any>(url, {title: 'Angular POST Request Example'})
      .subscribe(data => {
        this.data = data;
      });
  }

}

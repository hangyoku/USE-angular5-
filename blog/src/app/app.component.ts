import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

   public title = 'app';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }
  // get() {
  //   this.http.get('/api/login').subscribe(data => {
  //     console.log(data);
  //   });
  // }
  // get1() {
  //   this.http.get('/api').subscribe(data => {
  //     console.log(data);
  //   });
  // }
}

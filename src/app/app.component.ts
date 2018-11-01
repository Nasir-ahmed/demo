import { Component } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo works!!!';
  items: any = '';
  severError = '';
  constructor(public http: Http) {
    this.severError = '';
  }

  ngOnInit() {

    const dataurl = 'https://jsonplaceholder.typicode.com/posts';
    this.http.get(dataurl, { headers: null }).subscribe(response => {
      this.items = response.json();
      console.log(this.items)
    }, error => {
      this.items = '';
      this.severError = "internal server error"
    });

  }
}

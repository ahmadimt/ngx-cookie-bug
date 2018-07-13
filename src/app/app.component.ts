import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private cookiesService: CookieService) { }

  addCookie() {
    this.cookiesService.set('token', 'name');
  }
  deleteCookie() {
    // this does not work
    this.cookiesService.deleteAll('token');
  }

  deleteAllCookie() {
    // This works
    this.cookiesService.deleteAll();
  }
}

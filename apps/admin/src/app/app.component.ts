import { Component } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'admin-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'admin';
  now = moment().format("LLLL");
}



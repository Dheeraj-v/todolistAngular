import { Component, Input } from '@angular/core';
import { Todotasks } from './models/todotasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todalist';
  todotasks:Todotasks[] = [{
    taskName: 'discuss with teamates',
    isCompleted: false
  }];
}

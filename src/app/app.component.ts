import {Component, OnInit} from '@angular/core';
import {Link, Node} from './d3/models';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'big-data-project';

  constructor() {}

}

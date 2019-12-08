import { Component } from '@angular/core';
import {Link, Node} from './d3/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'big-data-project';
  nodes: Node[] = [{id: 'test', x: 500, y: 10}, {id: 'test2', x: 20, y: 20}];
  links: Link[] = [{source: 'test', target: 'test2', index: 1}];
}

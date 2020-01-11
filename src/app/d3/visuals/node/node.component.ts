
import {Component, Input, OnInit} from '@angular/core';
import { Node } from '../../models/';

@Component({
  selector: '[nodeVisual]',
  template: `
    <svg:g [attr.transform]="'translate(' + node.x + ',' + node.y + ')'"
           [matTooltip]="node.label"
           matTooltipClass="tooltip">
      <svg:circle
          cx="0"
          cy="0"
          r="200">
      </svg:circle>
      <svg:text>
        {{node.id}}
      </svg:text>
    </svg:g>
  `,
  styleUrls: ['./node.component.scss']
})
export class NodeVisualComponent implements OnInit {
    ngOnInit(): void {
        console.log(this.node);
    }
  @Input('nodeVisual') node: Node;
}

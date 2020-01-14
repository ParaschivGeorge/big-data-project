import {Component, Input} from '@angular/core';
import {Link} from '../../models';

@Component({
  selector: '[linkVisual]',
  template: `
      <svg:line
              [attr.x1]="link.source.x"
              [attr.y1]="link.source.y"
              [attr.x2]="link.target.x"
              [attr.y2]="link.target.y"
              [ngClass]="{
                'green': link.target.id.includes('fee'),
                'blue': link.target.id.includes('value'),
                'red': !(link.target.id.includes('fee') && link.target.id.includes('value'))
              }"
              style="stroke-width:50"
      ></svg:line>
  `,
  styleUrls: ['./link.component.scss']
})
export class LinkVisualComponent {
  @Input('linkVisual') link: Link;
}

import {AfterViewInit, Component, Input, OnInit, ChangeDetectorRef,
  ChangeDetectionStrategy} from '@angular/core';
import {ForceDirectedGraph} from '../../models';
import {D3Service} from '../../d3.service';

@Component({
  selector: 'graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphComponent implements OnInit, AfterViewInit {

  constructor(private d3Service: D3Service, private ref: ChangeDetectorRef) { }

  get options() {
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  @Input('nodes') nodes;
  @Input('links') links;

  graph: ForceDirectedGraph;

  private _options: { width, height } = { width: 800, height: 600 };

  ngOnInit() {
    /** Receiving an initialized simulated graph from our custom d3 service */
    this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);
    this.graph.ticker.subscribe((d) => {
      this.ref.markForCheck();
    });
  }

  ngAfterViewInit() {
    this.graph.initSimulation(this.options);
  }

}

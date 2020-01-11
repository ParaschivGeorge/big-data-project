import {Component, OnInit} from '@angular/core';
import {Link, Node} from './d3/models';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'big-data-project';
  nodes: Node[] = [{id: 'test', x: 500, y: 10}, {id: 'test2', x: 20, y: 20}, {id: 'test3', x: 2000, y: 300}, {id: 'test4', x: -1000, y: -200}, {id: 'test5', x: 2000, y: -1220}];
  links: Link[] = [{source: this.nodes[0], target: this.nodes[1], index: 1}, {source: this.nodes[0], target: this.nodes[2], index: 2}];


  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getBitcoinData().subscribe(data => {
      this.nodes = [];
      this.links = [];
      data.forEach((btData, index) => {
        this.nodes.push({id: btData.block_timestamp_month, x: this.nodes.length * 1000, y:  -btData.TRANSACTIONS / 300, label: 'Transactions: ' +  btData.TRANSACTIONS.toString()});
        this.nodes.push({id: btData.block_timestamp_month + '_fee', x: (this.nodes.length - 1) * 1000, y: -btData.avg_fee / 6, label: 'Avg. fee: ' + parseFloat(btData.avg_fee).toFixed(2).toString() + ' satoshis'});
        this.nodes.push({id: btData.block_timestamp_month + '_value', x: (this.nodes.length - 2) * 1000, y: -btData.value * 3, label: 'Bitcoin value: ' + btData.value.toString() + '$'});
      });
      for (let i = 0; i < this.nodes.length - 3; i += 3) {
        this.links.push({source: this.nodes[i], target: this.nodes[i + 3], index: i - 1});
        this.links.push({source: this.nodes[i + 1], target: this.nodes[i + 4], index: i});
        this.links.push({source: this.nodes[i + 2], target: this.nodes[i + 5], index: i});
      }
    });
  }
}

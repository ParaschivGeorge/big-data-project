import { Component, OnInit } from '@angular/core';
import {Link, Node} from '../../d3/models';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-litecoin',
  templateUrl: './litecoin.component.html',
  styleUrls: ['./litecoin.component.scss']
})
export class LitecoinComponent implements OnInit {

  nodes: Node[] = [{id: 'test', x: 500, y: 10}, {id: 'test2', x: 20, y: 20}, {id: 'test3', x: 2000, y: 300}, {id: 'test4', x: -1000, y: -200}, {id: 'test5', x: 2000, y: -1220}];
  links: Link[] = [{source: this.nodes[0], target: this.nodes[1], index: 1}, {source: this.nodes[0], target: this.nodes[2], index: 2}];


  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getLitecoinData().subscribe(data => {
      this.nodes = [];
      this.links = [];
      data.forEach((ltData, index) => {
        this.nodes.push({id: ltData.block_timestamp_month, x: this.nodes.length * 1000, y:  -ltData.transactions / 150, label: 'Transactions: ' +  ltData.transactions.toString()});
        this.nodes.push({id: ltData.block_timestamp_month + '_fee', x: (this.nodes.length - 1) * 1000, y: -ltData.fee_avg / 300, label: 'Avg. fee: ' + parseFloat(ltData.fee_avg).toFixed(2).toString()});
        this.nodes.push({id: ltData.block_timestamp_month + '_value', x: (this.nodes.length - 2) * 1000, y: -ltData.value * 50, label: 'Litecoin value: ' + ltData.value.toString() + '$'});
      });
      for (let i = 0; i < this.nodes.length - 3; i += 3) {
        this.links.push({source: this.nodes[i], target: this.nodes[i + 3], index: i - 1});
        this.links.push({source: this.nodes[i + 1], target: this.nodes[i + 4], index: i});
        this.links.push({source: this.nodes[i + 2], target: this.nodes[i + 5], index: i});
      }
    });
  }

}

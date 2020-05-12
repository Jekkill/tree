import { Component, OnInit } from '@angular/core';
import { TreeService } from './services/tree.service';
import { Node } from './interfaces/node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  nodes: Node[];
  
  constructor(
    private treeService: TreeService
  ) {}

  ngOnInit() {
    this.treeService.nodes.subscribe(nodes => this.nodes = nodes);
  }

}

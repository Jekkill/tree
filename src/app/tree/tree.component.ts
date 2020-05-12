import { Component, OnInit } from '@angular/core';
import { Node } from '../interfaces/node';
import { TreeService } from '../services/tree.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  
  tree: Node[];
  
  constructor(
    private treeService: TreeService
  ) { }

  ngOnInit() {
    this.treeService.nodes.subscribe(nodes => this.tree = nodes);
  }

  saveCurrentTreeStateToLocalStorage() {
    localStorage.setItem('tree', JSON.stringify(this.tree));
  }

}

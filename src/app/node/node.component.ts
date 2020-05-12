import { Component, OnInit, Input } from '@angular/core';
import { Node } from '../interfaces/node';
import { TreeService } from '../services/tree.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  @Input() node: Node;

  isShown = false;

  constructor(
    private treeService: TreeService
  ) { }

  ngOnInit(): void {
    this.treeService.nodes.subscribe();
  }

  toggleChildrenComponents(): void {
    // TODO: also show/ hide all children blocks;
    this.isShown = !this.isShown;
  }
  
  updateCheckboxNode() {
    // TODO: also update all states for children nodes;
    this.node.selected = !this.node.selected;
  }


}

import { Component, OnInit } from '@angular/core';
import { TreeService } from '../services/tree.service';
import { Node } from '../interfaces/node';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list: Node[];

  constructor(
    private treeService: TreeService
  ) { }

  ngOnInit(): void {
    this.treeService.nodes.subscribe(nodes => this.list = nodes);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Node } from '../interfaces/node';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss']
})
export class ListElementComponent implements OnInit {
  @Input() element: Node;
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Node } from '../interfaces/node';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  private nodesSource = new BehaviorSubject<Node[]>([]);

  nodes = this.nodesSource.asObservable();

  constructor() { 
    this.nodesSource.next(this.getDefaultState());
  }

  getDefaultState (): Node[] {
    let currentTreeState: Node[];
    if (localStorage.getItem('tree')) {
      currentTreeState = JSON.parse(localStorage.getItem('tree'));
    } else {
      currentTreeState = [{
        value: 'Продукты',
        id: 1,
        selected: false,
        children: [
          {
            value: 'Фрукты',
            id: 2,
            selected: false, 
            children: [
              {
                value: 'Яблоки',
                id: 3,
                selected: false, 
                children: []
              },
              {
                value: 'Апельсины',
                id: 4,
                selected: false, 
                children: []
              },
              {
                value: 'Виноград',
                id: 5,
                selected: false, 
                children: []
              },
            ]
          },
          {
            value: 'Овощи',
            id: 6,
            selected: false, 
            children: [
              {
                value: 'Томаты',
                id: 7,
                selected: false,
                children: []
              },
              {
                value: 'Огурцы',
                id: 8,
                selected: false,
                children: []
              },
              {
                value: 'Капуста',
                id:9,
                selected: false,
                children: []
              }
            ]
          }
        ]
      }];
    }
    return currentTreeState;
  }
}

import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
  // To remove Shadow DOM id appended by Angular to its elements
  /*encapsulation: ViewEncapsulation.None // Emulated(default), Native*/
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
  }

}

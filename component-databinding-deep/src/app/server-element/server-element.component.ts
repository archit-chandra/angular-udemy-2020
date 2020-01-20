import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
  // To remove Shadow DOM id appended by Angular to its elements
  /*encapsulation: ViewEncapsulation.None // Emulated(default), Native*/
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() {
  }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messageToDisplay: string = 'warning';

  constructor() {
    this.messageToDisplay = Math.random() > 0.5 ? 'success' : 'warning';
  }

  getMessageToDisplay() {
    return this.messageToDisplay;
  }

}

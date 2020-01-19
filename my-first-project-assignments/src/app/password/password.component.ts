import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  content: string = 'Secret Password = tuna';
  contentVisible: boolean = false;

  buttonClicked: number = 0;
  buttonClickedLog = [];

  constructor() {
  }

  ngOnInit() {
  }

  getContent() {
    return this.content;
  }

  toggleContent() {
    this.contentVisible = !this.contentVisible;
    this.buttonClicked = this.buttonClicked + 1;
    this.buttonClickedLog.push(this.buttonClicked);
  }

  isContentVisible() {
    return this.contentVisible;
  }

  isButtonClickedOnce(logItem: number) {
    return logItem.valueOf() > 0;
  }

  getBGColor(logItem: number) {
    return logItem >= 5 ? 'blue' : 'transparent';
  }

  getTextColor(logItem: number) {
    return logItem >= 5;
  }
}

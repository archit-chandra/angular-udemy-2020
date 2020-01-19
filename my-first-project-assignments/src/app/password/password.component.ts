import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  content: string = 'Secret Password = tuna';
  contentVisible: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

  getContent() {
    return this.content;
  }

  toggleContent() {
    this.contentVisible = !this.contentVisible;
  }

  isContentVisible() {
    return this.contentVisible;
  }

}

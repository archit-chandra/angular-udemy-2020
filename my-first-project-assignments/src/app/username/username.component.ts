import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  username: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  isClickable() {
    return this.username.length > 0;
  }

  resetUsername() {
    this.username = '';
  }

}

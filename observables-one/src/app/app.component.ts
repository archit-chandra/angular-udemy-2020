import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "./user/user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private userActivatedSubscription: Subscription;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userActivatedSubscription = this.userService.activatedUserEmitter.subscribe(isUserActivated => {
      this.userActivated = isUserActivated;
    });
  }

  ngOnDestroy(): void {
    this.userActivatedSubscription.unsubscribe();
  }
}

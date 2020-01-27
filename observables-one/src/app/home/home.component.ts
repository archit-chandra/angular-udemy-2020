import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private fisrtObsSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    /*this.fisrtObsSubscription = interval(1000).subscribe(count => {
      console.log(count);
    })*/

    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3'));
        }
        count++;
      }, 1000)
    });

    this.fisrtObsSubscription = customIntervalObservable.subscribe(count => {
      console.log(count);
    }, error => {
      alert(error.message);
    }, () => {
      // completion handler
      console.log('Observable is completed!!')
    })
  }

  ngOnDestroy(): void {
    this.fisrtObsSubscription.unsubscribe();
  }

}

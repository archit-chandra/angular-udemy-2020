import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostModel} from "./models/post.model";
import {PostService} from "./services/post.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: PostModel[] = [];
  isFetching = false;
  errorMsg = null;
  errorMsgSubscription: Subscription;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.fetchPosts();
    this.errorMsgSubscription = this.postService.errorSubject.subscribe(errorMessage => {
      this.errorMsg = errorMessage;
    });
  }

  onCreatePost(postData: PostModel) {
    this.postService.createAndStorePost(postData);
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  private fetchPosts() {
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(
      (posts) => {
        console.log(posts);
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      error => {
        console.log(error);
        this.isFetching = false;
        // this.errorMsg = error.message;
        this.errorMsg = error.statusText;
      }
    );
  }

  onClearPosts() {
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  ngOnDestroy(): void {
    this.errorMsgSubscription.unsubscribe();
  }

  onHandleError() {
    this.errorMsg = null;
  }
}

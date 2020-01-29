import {Component, OnInit} from '@angular/core';
import {PostModel} from "./models/post.model";
import {PostService} from "./services/post.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: PostModel[] = [];
  isFetching = false;
  errorMsg = null;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.fetchPosts();
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
}

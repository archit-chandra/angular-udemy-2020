import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PostModel} from "../models/post.model";
import {map} from "rxjs/operators";
import {Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class PostService {
  errorSubject = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  createAndStorePost(postData: PostModel) {
    this.http.post<{ name: string }>('https://angular-2020-6c98c.firebaseio.com/posts.json', postData).subscribe(
      (responseData) => {
        console.log(responseData);
      },
      error => {
        this.errorSubject.next(error.statusText);
      }
    );
  }

  fetchPosts() {
    return this.http.get<{ [key: string]: PostModel }>('https://angular-2020-6c98c.firebaseio.com/posts.json')
      .pipe(map(responseData => {
        const postsArray: PostModel[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({...responseData[key], id: key});
          }
        }
        return postsArray;
      }));
  }

  deletePosts() {
    return this.http.delete('https://angular-2020-6c98c.firebaseio.com/posts.json')
  }
}

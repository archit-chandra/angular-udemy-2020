import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {PostModel} from "../models/post.model";
import {catchError, map} from "rxjs/operators";
import {Subject, throwError} from "rxjs";

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
    // NOTES: for adding multiple query params
    /*let searchParams=new HttpParams();
    searchParams=searchParams.append('print', 'pretty');
    searchParams=searchParams.append('custom', 'key');*/
    return this.http.get<{ [key: string]: PostModel }>('https://angular-2020-6c98c.firebaseio.com/posts.json',
      {
        headers: new HttpHeaders({'Custom-Header': 'hello'}),
        params: new HttpParams().set('print', 'pretty')
        //params: searchParams
      })
      .pipe(map(responseData => {
          const postsArray: PostModel[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({...responseData[key], id: key});
            }
          }
          return postsArray;
        }),
        catchError(errorResponse => {
          // not for UI but send to server for analysis
          // then
          return throwError(errorResponse); // can customize here errorResponse
        }));
  }

  deletePosts() {
    return this.http.delete('https://angular-2020-6c98c.firebaseio.com/posts.json')
  }
}

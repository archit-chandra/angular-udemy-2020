import {Injectable} from "@angular/core";
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from "@angular/common/http";
import {PostModel} from "../models/post.model";
import {catchError, map, tap} from "rxjs/operators";
import {Subject, throwError} from "rxjs";

@Injectable({providedIn: 'root'})
export class PostService {
  errorSubject = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  createAndStorePost(postData: PostModel) {
    this.http.post<{ name: string }>('https://angular-2020-6c98c.firebaseio.com/posts.json',
      postData,
      {
        // default
        // observe: "body"
        observe: "response"
      }
    ).subscribe(
      (responseData) => {
        console.log(responseData);
        // console.log(responseData.body);
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
    return this.http.delete('https://angular-2020-6c98c.firebaseio.com/posts.json',
      {
        observe: "events",
        responseType: 'json' // text, blob etc - to let angular parse it to required type
      }).pipe(tap(event => {
      console.log(event);
      if (event.type === HttpEventType.Response) {
        console.log(event.body);
      } else if (event.type === HttpEventType.Sent) {
        console.log('Request is sent and waiting for response');
      }
    }));
  }
}

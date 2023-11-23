import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = 'http://localhost:3001/api'

  constructor( private http: HttpClient) {

  }

  checkUserService(user: User):Observable<any>{
    return this.http.post<any>(this.url + '/users/signin',user).pipe(
      res => res,
      error => error
    )
  }

  createNewUser(user: User): Observable<any>{
    return this.http.post<any>(this.url + '/users/signup', user).pipe(
      res => res,
      error => error
    )
  }

}

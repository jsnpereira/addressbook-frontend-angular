import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url: string = 'http://localhost:3001/api'

  constructor(private http: HttpClient) { }


  getAllContactsByUsername(token: string):Observable<any>{
    const headers = { 'Authorization': 'Bearer '+token }
    return this.http.get(this.url +'/contacts?page=1&limit=100',{headers}).pipe(
      res => res,
      error => error
    )
  }

  getContactById(token: string,id: any):Observable<any> {
    const headers = { 'Authorization': 'Bearer '+token }
    return this.http.get(this.url +'/contacts/'+id,{headers}).pipe(
      res => res,
      error => error
    )
  }

  updateContact(token: string, id: any, contact: any) :Observable<any>{
    const headers = { 'Authorization': 'Bearer '+token }
    return this.http.put(this.url +'/contacts/'+id,contact,{headers}).pipe(
        res => res,
        error => error
    )
  }

  deleteContact(token: string, id: any) :Observable<any>{
    const headers = { 'Authorization': 'Bearer '+token }
    return this.http.delete(this.url +'/contacts/'+id, {headers}).pipe(
        res => res,
        error => error
    )
  }

  searchContact(token: string, value: any): Observable<any>{
    const headers = { 'Authorization': 'Bearer '+token }
    return this.http.get(this.url +'/contacts/search?key='+value,{headers}).pipe(
      res => res,
      error => error
    )
  }
}

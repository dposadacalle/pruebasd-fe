import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.interface';

@Injectable({providedIn: 'root'})
export class Api{

  private urlBase: string = 'http://localhost:5159/api'

  constructor(private http: HttpClient) { }

  get(urlEndpoint: string): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.urlBase}/${urlEndpoint}`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
  }


}

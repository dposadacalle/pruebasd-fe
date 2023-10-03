import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from 'src/app/core/http/api';
import { IUser } from 'src/app/core/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: Api) { }

  public getUsers(url: string): Observable<IUser[]>{
    return this.api.get(url)
  }
}


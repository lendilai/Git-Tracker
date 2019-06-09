import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class SearchUserService {

  constructor(private http: HttpClient) { }

  getUser(userName: string): Observable<User[]>{
    return this.http.get(environment.apiUrl + '/users/' + userName);
  }
}

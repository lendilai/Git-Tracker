import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { User } from './user';
import { Repos } from './repos';

@Injectable({
  providedIn: 'root'
})
export class SearchUserService {
  constructor(private http: HttpClient) { }

  getUsers(userName: string): Observable<User[]>{
    return this.http.get<User[]>(environment.apiUrl + '/users/' + userName);
  }

  getRepos(userName: string): Observable<Repos[]>{
    return this.http.get<Repos[]>(environment.apiUrl + '/users/' + userName + '/repos');
  }
}

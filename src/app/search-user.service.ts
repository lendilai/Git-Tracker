import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchUserService {

  constructor(private http: HttpClient) { }

  getUser(userName: string){
    return this.http.get(apiUrl);
  }
}

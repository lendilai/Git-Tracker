import { Component, OnInit } from '@angular/core';
import { SearchUserService } from '../search-user.service';
import { User } from '../user';
import { Repos } from '../repos';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import * as $ from 'jquery';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  userName = '';
  users: User[];
  repos: Repos[];
  errorMessage;

  constructor(private userData: SearchUserService) { }

  public getUsers(event: any){
    let promise = new Promise((resolve, reject)=>{
      this.userData.getUsers(this.userName).toPromise().then(response => {
        this.users = response;
        this.users = Array.of(this.users);

        resolve();
      },
      error => {
        this.errorMessage =  "An unexpected error has occurred";
      }
    );
  });
  return promise;
  }

  public getRepos(event: any){
    let promise = new Promise((resolve, reject)=>{
      this.userData.getRepos(this.userName).toPromise().then(response => {
        this.repos = response;

        resolve();
      },
      error => {
        this.errorMessage =  "An unexpected error has occurred";
      }
    );
  });

  return promise;
  }
  ngOnInit() {
    $(document).ready(function(){
      event.preventDefault();
      $("#send").click();
    })
  }


}

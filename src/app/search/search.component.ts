import { Component, OnInit } from '@angular/core';
import { SearchUserService } from '../search-user.service';
import { User } from '../user';
import { Repos } from '../repos';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  users: User[];
  repos: Repos[];

  constructor(private userData: SearchUserService) { }

  public getUser(event: any){
    let promise = new Promise((resolve, reject)=>{
      this.userData.getUser(this.userName).toPromise().then(response => {
        this.users = response;

        resolve();
      },
      error => {
        this.users =  "An unexpected error has occurred";
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
        this.repos =  "An unexpected error has occurred";
      }
    );
  });
  return promise;
  }
  ngOnInit() {
  }

}

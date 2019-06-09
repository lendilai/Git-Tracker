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


  ngOnInit() {
  }

}

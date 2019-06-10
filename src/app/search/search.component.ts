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
  users;
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

    $(document).ready(function(){
      $('.avatar').click(function(e) {
      $('.card-user').toggleClass('active');
       });
var target, ink, d, x, y;
$(".social").click(function(e) {
  target = $(this);
  if (target.find(".ink").length === 0)
    target.prepend("<span class='ink'></span>");

  ink = target.find(".ink");
  ink.removeClass("animate");
  if (!ink.height() && !ink.width()) {
    d = Math.max(target.outerWidth(), target.outerHeight());
    ink.css({
      height: d,
      width: d
    });
  }
  x = e.pageX - target.offset().left - ink.width() / 2;
  y = e.pageY - target.offset().top - ink.height() / 2;

  ink.css({
    top: y + 'px',
    left: x + 'px'
  }).addClass("animate");
});
    })
  }


}

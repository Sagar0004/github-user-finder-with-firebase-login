import { Component, OnInit } from '@angular/core';
import { GitUsersService } from '../git-users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-git-users',
  templateUrl: './git-users.component.html',
  styleUrls: ['./git-users.component.css']
})
export class GitUsersComponent implements OnInit {
  GitUsers = [];
  GitRepos = [];
  login ="";
  constructor(private _gitUsers: GitUsersService,private _route:ActivatedRoute) {}
  ngOnInit(): void {
  
  }
  setlogin(e)
  {
    this.login = e.target.value
  }
  getGitUsers = () => {
    this._gitUsers.getGitUsers(this.login).subscribe(res => {
      this.GitUsers = this.GitUsers.concat(res);
    });
    this._gitUsers.getGitRepose(this.login).subscribe(res => {
      this.GitRepos = this.GitRepos.concat(res);
    });
    this.GitUsers.splice(0,1); 
    this.GitRepos.splice(0,1);
    this.login = "";
  };


}

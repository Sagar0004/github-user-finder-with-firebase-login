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
  error = "";
  constructor(private _gitUsers: GitUsersService,private _route:ActivatedRoute) {}
  ngOnInit(): void {
  
  }
  getGitUsers = () => {
    this._gitUsers.getGitUsers(this.login).subscribe(res => {
      this.GitUsers = this.GitUsers.concat(res);
    },err=>{this.error = err.error.message});
    this._gitUsers.getGitRepose(this.login).subscribe(res => {
      this.GitRepos = this.GitRepos.concat(res);
    });
    this.GitUsers.splice(0,this.GitUsers.length); 
    this.GitRepos.splice(0,this.GitRepos.length);
    this.login = "";
    this.error = "";
  };


}

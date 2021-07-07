import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class GitUsersService {

  GitUrl ='https://api.github.com/users'
  
  constructor(private _httpClient : HttpClient) { }

  
  getGitUsers(login)
  {
   return this._httpClient.get(this.GitUrl+"/"+login);
  }
  getGitRepose(login)
  {
   return this._httpClient.get(this.GitUrl+"/"+login+"/repos");
  }
}

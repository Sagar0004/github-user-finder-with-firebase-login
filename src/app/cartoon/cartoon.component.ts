import { Component, OnInit } from '@angular/core';
import { ApiUsersService } from '../api-users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cartoon',
  templateUrl: './cartoon.component.html',
  styleUrls: ['./cartoon.component.css']
  
})
export class CartoonComponent implements OnInit {

  cartoon = [];
  //demo :any='http://localhost:8088/Student/image/';
  constructor(private _api:ApiUsersService ,private _route : Router) { }

  ngOnInit(): void {
  //  this.getCartoon();
  }
  // getCartoon = ()=>{
  //   this._api.getAllUsers().subscribe(res=>{this.cartoon = this.cartoon.concat(res);
  //   })
  // }

  // detailCartoon(id)
  // {
  //   this._route.navigate(['./cartoon/',id]);
  // }
}

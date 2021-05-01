import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  txtusername;
  txtpassword;
  msg;

  ngOnInit(): void {
  }

  login()
  {
    if(this.txtusername =="sagar" && this.txtpassword == 7115)
    {
      this.msg = "Login Success";
    }
    else
    {
      this.msg = "Login Failed";
    }
  }

}

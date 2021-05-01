import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  islogeedin = false;
  label = "";
  

  constructor(public firebaseService: FirebaseService,private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    if (localStorage.getItem('user'))
      this.islogeedin = true;
    else
      this.islogeedin = false;
      if (this.firebaseService.isloggedin)
      {
        this.islogeedin = true;
        this.router.navigate(['']);
      }  
  }
  async SignIn(email: string, password: string) {
    await this.firebaseService.signin(email, password)
    if (this.firebaseService.isloggedin)
    {
      this.islogeedin = true;
      this.router.navigate(['']);
    }
    else
    {
      this.islogeedin = false;
      this.label = this.firebaseService.err;
      this.toastr.error(this.label, undefined, {
        positionClass: 'toast-top-right'
   });
    }
  }
}

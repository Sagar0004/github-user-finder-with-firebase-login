import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  islogeedin = false;
  label = "";
  email:string
  password:string
  constructor(public auth: AngularFireAuth,public firebaseService: FirebaseService,private router: Router,private toastr: ToastrService) { }

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
  async SignIn() {
    await this.firebaseService.signin(this.email, this.password)
    if (this.firebaseService.isloggedin)
    {
      this.islogeedin = true;
      this.router.navigate(['']);
      this.email = '';
      this.password = '';
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

import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  islogeedin = false;
  label = '';
  email:string;
  password:string;
  constructor(public firebaseService: FirebaseService, private toastr: ToastrService) { }

  ngOnInit(): void {
    if (localStorage.getItem('user') !== null)
      this.islogeedin = true;
    else
      this.islogeedin = false;
  }
  async SignUp() {
    await this.firebaseService.signup(this.email, this.password)
    if (!this.firebaseService.isloggedin && !this.firebaseService.err) {
      this.islogeedin = true;
      this.toastr.success(this.label, 'signup successfull', {
        positionClass: 'toast-top-right'
      });
      this.email='';
      this.password='';
    }
    else {
      this.islogeedin = false;
      this.label = this.firebaseService.err;
      this.toastr.error('', this.firebaseService.err, {
        positionClass: 'toast-top-right'
      });
    }
  }
 
}

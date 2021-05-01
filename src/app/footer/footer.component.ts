import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  islogeedin = false;
  label = '';
  constructor(public firebaseService: FirebaseService, private toastr: ToastrService) { }

  ngOnInit(): void {
    if (localStorage.getItem('user') !== null)
      this.islogeedin = true;
    else
      this.islogeedin = false;
  }
  async SignUp(email: string, password: string) {
    await this.firebaseService.signup(email, password)
    if (this.firebaseService.isloggedin) {
      this.islogeedin = true;
      this.toastr.success(this.label,'sign up successfully')
    }
    else {
      this.islogeedin = false;
      this.label = this.firebaseService.err;
      this.toastr.error(this.label, undefined, {
        positionClass: 'toast-top-right'
      });
    }
  }
 
}

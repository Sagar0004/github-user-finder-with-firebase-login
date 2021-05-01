import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';
Router

@Component({
  selector: 'app-newheader',
  templateUrl: './newheader.component.html',
  styleUrls: ['./newheader.component.css']
})
export class NewheaderComponent implements OnInit {

 
  constructor(public firebaseService: FirebaseService,public router:Router) { }

  email;

  ngOnInit(): void {
    this.setUser()
    
  }
  setUser = () =>{
    if(localStorage.getItem('user')){
      this.email = JSON.parse(localStorage.getItem('user')).email;
    }
  }
  async Logout() {
    await this.firebaseService.logout();
    this.email ="";
  }

}

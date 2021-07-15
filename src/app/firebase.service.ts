import { Injectable } from '@angular/core';
import { AngularFireAuth } from  "@angular/fire/auth";
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isloggedin : boolean = false;
  err;
  email;
  constructor(public firebaseAuth : AngularFireAuth,private router: Router) {
    if(localStorage.getItem('user'))
    {
      this.isloggedin = true;
    }
   }

  async signin(email : string ,password : string)
  {
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isloggedin = true;
      localStorage.setItem('user',JSON.stringify(res.user))
      this.email = res.user.email;
    }).catch(
      error => {
        this.err = error.code;
      })
  }
  async signup(email : string ,password : string)
  {
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isloggedin = false;
      localStorage.setItem('user',JSON.stringify(res.user))
    }).catch(
      error => {
        this.err = error.message;
      })
  }
  logout()
  {
    this.firebaseAuth.signOut().then(()=>{
      this.router.navigate(['login'])
    })
    localStorage.removeItem('user');
    this.isloggedin = false;
  } 


}

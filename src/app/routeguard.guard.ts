import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from './firebase.service';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouteguardGuard implements CanActivate {
  constructor(public firebaseService: FirebaseService,private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
  

    if(this.firebaseService.isloggedin)
    {
      return true;
    }
    else{
      this.router.navigate(['login']);
      return false;
    }
  }
  
}

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { RouteguardGuard } from './routeguard.guard';
import { AuthguardGuard } from './authguard.guard';
import { GitUsersComponent } from './git-users/git-users.component';
import { HeaderComponent } from './header/header.component';




const routes: Routes = [
  {path:'',component:HomeComponent, },
  {path:'signup', component:FooterComponent,canActivate : [AuthguardGuard]},
  {path:'users', component:GitUsersComponent, canActivate: [RouteguardGuard]},
  {path:'login', component:LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NewheaderComponent } from './newheader/newheader.component';
import { DetailComponent } from './detail/detail.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule} from '@angular/common/http';
import { CartoonComponent } from './cartoon/cartoon.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { FirebaseService } from './firebase.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GitUsersComponent } from './git-users/git-users.component';
import { GitUserDetailsComponent } from './git-user-details/git-user-details.component';
import { GitReposComponent } from './git-repos/git-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NewheaderComponent,
    DetailComponent,
    UsersComponent,
    CartoonComponent,
    LoginComponent,
    GitUsersComponent,
    GitUserDetailsComponent,
    GitReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(), 
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

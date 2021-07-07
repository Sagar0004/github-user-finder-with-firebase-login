import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NewheaderComponent } from './newheader/newheader.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';
import { FirebaseService } from './firebase.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GitUsersComponent } from './git-users/git-users.component';
import { GitUserDetailsComponent } from './git-user-details/git-user-details.component';
import { GitReposComponent } from './git-repos/git-repos.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { SETTINGS as AUTH_SETTINGS } from '@angular/fire/auth';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    NewheaderComponent,
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
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [ { provide: AUTH_SETTINGS, useValue: { appVerificationDisabledForTesting: true } },],
  bootstrap: [AppComponent]
})
export class AppModule { }

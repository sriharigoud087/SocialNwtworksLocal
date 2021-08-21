import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { AllPurposeService } from '../all-purpose.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( 
    private socialAuthService: SocialAuthService,private allpurpose:AllPurposeService) { }
 
  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      console.log(this.socialUser);
      localStorage.setItem('_id',this.socialUser.id);
      localStorage.setItem('userData',JSON.stringify(this.socialUser));
     
      this.allpurpose.logined.next();
    });
    
  }
  socialUser: SocialUser | any;
  isLoggedin: boolean | any;  
 
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }


}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { MainviewComponent } from './mainview/mainview.component';
import { LoginComponent } from './login/login.component';
import { PostcardComponent } from './postcard/postcard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { HttpClientModule } from '@angular/common/http';
import{FormsModule} from '@angular/forms';
/*
979983711438-kokqppiiq7ulcue8qh0djaph0scggugj.apps.googleusercontent.com

AxfmgM0yu0LOQUGkhG87cjD0
*/


@NgModule({
  declarations: [
    AppComponent,
    MainviewComponent,
    LoginComponent,
    PostcardComponent,
    UserProfileComponent,
    TopbarComponent,
    CreatepostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SocialLoginModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('921611230978-ek6m5qujmnrog4rad2qs2516te1e07oc.apps.googleusercontent.com')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

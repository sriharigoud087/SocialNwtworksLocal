import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatepostComponent } from './createpost/createpost.component';
import { MainviewComponent } from './mainview/mainview.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path:'', redirectTo:'mainview' ,pathMatch:'full'
  },
  {path:'mainview',component:MainviewComponent,
  },
  {path:'userProfile',component:UserProfileComponent},
  {path:'createPost' ,component:CreatepostComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

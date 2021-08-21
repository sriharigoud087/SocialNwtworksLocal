import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }
  userProfileData: any;
  postArray: any = [];
  showPosts = false;
  ngOnInit(): void {
    this.userProfileData = localStorage.getItem('userData');
    this.userProfileData = JSON.parse(this.userProfileData);
    if (localStorage.getItem("postArr")) {
      this.postArray = JSON.parse(localStorage["postArr"]);
      this.postArray.reverse();
      this.showPosts = true;
    }
  }
}

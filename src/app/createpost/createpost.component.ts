import { ThrowStmt } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import{User} from  '../../user';
import { AllPurposeService } from '../all-purpose.service';
@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

  constructor(private _sanitizer: DomSanitizer,private allPurpose:AllPurposeService,private router:Router) { }
  @ViewChild("myFile") myFile: ElementRef;
  postArr:any=[];
  ngOnInit(): void {
    var userInfo=JSON.parse(localStorage.getItem('userData'));
    this.userData.id=userInfo.id;
    this.userData.name=userInfo.name;
    this.userData.profilePic=userInfo.photoUrl;
  }
  userData:any={};
  base64Image: any;
  showImage = false;
  showToast=false;
  onImagePicked(eve: any) {
    console.log(eve)
    let file = eve.target.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.base64Image = myReader.result;


      this.showImage = true;

    }
    myReader.readAsDataURL(file);


  }
  onClick() {
    this.myFile.nativeElement.click();
  }
  getLocation() {
    this.showToast=true;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
    setTimeout(()=>{
      this.showToast=false;
    },1500)
  }

    
  
  // latitude;
  // longitude;
  showLocation = false;
  content;
  showPost
  showPosition(position) {
    // this.latitude = position.coords.latitude;
    // this.longitude = position.coords.longitude;
    this.userData.latitude = position.coords.latitude;
    this.userData.longitude = position.coords.longitude;
    // console.log( this.latitude,this.longitude)
    
  }
  createPost(){
    
    if(this.content==" ")
    {
      alert("please Enter some text");
      return;
    }
   else if(!this.base64Image)
    {
      alert("please select one image");
      return;
    }
   else if(!this.userData.latitude)
    {
      alert("please tag locaiton");
      return;
    }


    this.postArr=[];
    this.userData.content=this.content;
    this.userData.image=this.base64Image;
    this.showPost=true;
   this.postArr.push(this.userData);
   

    console.log(this.postArr)
    if(localStorage.getItem("postArr"))
    {
      this.postArr=[];
      var postArray=JSON.parse(localStorage["postArr"]);
      this.postArr=[...postArray];
      this.postArr.push(this.userData)
      localStorage["postArr"] = JSON.stringify(this.postArr);

    }
    else{
      // localStorage.setItem("postArr",this.postArr);
      localStorage["postArr"] = JSON.stringify(this.postArr);
      var postArray = JSON.parse(localStorage["postArr"]);
    } 
    this.allPurpose.gotData.next(this.postArr);
    this.router.navigateByUrl('/mainview');
    this.router.navigateByUrl('/mainview');

  }
}


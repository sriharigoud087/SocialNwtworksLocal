import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllPurposeService } from '../all-purpose.service';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit {

  constructor(private allPurpose:AllPurposeService,private router:Router) { }
  isAuthed=false;
  userData:any;
  postArray:any=[];
  showPosts=false;
  ngOnInit(): void {
    if(localStorage.getItem("postArr"))
    {
       this.postArray=JSON.parse(localStorage["postArr"]);
       this.postArray.reverse();
      this.showPosts=true;

    }
    if(localStorage.getItem('_id')){
      this.isAuthed=true;
    }
    this.allPurpose.logined.subscribe(()=>{
      if(localStorage.getItem('_id')){
        this.isAuthed=true;
      }
    })
    if(localStorage.getItem('userData'))
    {
      this.userData=localStorage.getItem('userData');
    }
  
  }
}

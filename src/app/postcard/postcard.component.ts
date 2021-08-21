import { Component, Input, OnInit } from '@angular/core';
import { AllPurposeService } from '../all-purpose.service';
import{User} from '../../user';
@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})
export class PostcardComponent implements OnInit {

  constructor(private allpurpose:AllPurposeService) { }
  @Input() post;
  ngOnInit(): void {
   
   console.log(this.post)
  }

}

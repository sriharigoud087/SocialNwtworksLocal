import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllPurposeService {
  logined=new Subject();
  gotData=new Subject();
  constructor() { }
}

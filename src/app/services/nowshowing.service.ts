import { Injectable } from '@angular/core';
import { nowshowing } from '../shared/nowshowing';
import { NOW } from '../shared/nowshowing_info';

@Injectable({
  providedIn: 'root'
})
export class NowshowingService {
  getnow() : nowshowing[]{
    return NOW;
  }
  getbtitle(title:string):nowshowing{
    return NOW.filter((now)=>(now.title===title))[0];
  }
  constructor() { }
}

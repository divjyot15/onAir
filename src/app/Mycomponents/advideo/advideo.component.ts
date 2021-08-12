import { Component, OnInit } from '@angular/core';
import { nowshowing } from 'src/app/shared/nowshowing';
import { NowshowingService } from 'src/app/services/nowshowing.service';



@Component({
  selector: 'app-advideo',
  templateUrl: './advideo.component.html',
  styleUrls: ['./advideo.component.css']
})
export class AdvideoComponent implements OnInit {
  now:nowshowing[];
  constructor(private nowservice: NowshowingService) { }

  ngOnInit(): void {
  this.now =this.nowservice.getnow();
    
  }

}

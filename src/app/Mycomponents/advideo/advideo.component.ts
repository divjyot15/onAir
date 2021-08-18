import { Component, OnInit } from '@angular/core';
import { nowshowing } from 'src/app/shared/nowshowing';
import { NowshowingService } from 'src/app/services/nowshowing.service';

import { Params,ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-advideo',
  templateUrl: './advideo.component.html',
  styleUrls: ['./advideo.component.css']
})
export class AdvideoComponent implements OnInit {
  video:nowshowing;
  now:nowshowing[];
  constructor(private nowservice: NowshowingService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.now =this.nowservice.getnow();
  const title =this.route.snapshot.params['title'];
  this.video= this.nowservice.getbtitle(title);
  }

}

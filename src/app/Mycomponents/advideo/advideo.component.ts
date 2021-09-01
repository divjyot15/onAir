import { Component, OnInit } from '@angular/core';
import { nowshowing } from 'src/app/shared/nowshowing';
import { NowshowingService } from 'src/app/services/nowshowing.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Params,ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-advideo',
  templateUrl: './advideo.component.html',
  styleUrls: ['./advideo.component.css']
})
export class AdvideoComponent implements OnInit {
  video:nowshowing;
  now:nowshowing[];
  genuineVideoUrl: SafeResourceUrl;
  constructor(private nowservice: NowshowingService,
    private route: ActivatedRoute,
    private sanitizer : DomSanitizer) { }

  ngOnInit(): void {
  this.now =this.nowservice.getnow();
  const title =this.route.snapshot.params['title'];
  this.video= this.nowservice.getbtitle(title);
  this.genuineVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.url);
  }

}

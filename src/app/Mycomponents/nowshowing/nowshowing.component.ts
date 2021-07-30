import { Component, OnInit } from '@angular/core';
import { nowshowing } from 'src/app/shared/nowshowing';
import { NowshowingService } from 'src/app/services/nowshowing.service';

@Component({
  selector: 'app-nowshowing',
  templateUrl: './nowshowing.component.html',
  styleUrls: ['./nowshowing.component.css']
})
export class NowshowingComponent implements OnInit {
  NS: nowshowing[];
  constructor(private NOWSHOWING :NowshowingService) { }

  ngOnInit(): void {
    this.NS = this.NOWSHOWING.getnow();
  }

}

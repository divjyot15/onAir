import { Component, OnInit } from '@angular/core';
import { trending } from 'src/app/shared/trending_collections';
import { TrendingService } from 'src/app/services/trending.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  TC : trending[];
  constructor(private trendingservices : TrendingService ) { }

  ngOnInit(): void {
    this.TC = this.trendingservices.gettrending();
  }

}

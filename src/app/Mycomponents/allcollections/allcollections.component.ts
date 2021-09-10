import { Component, OnInit } from '@angular/core';
import { trending } from 'src/app/shared/trending_collections';
import { TrendingService } from 'src/app/services/trending.service';


@Component({
  selector: 'app-allcollections',
  templateUrl: './allcollections.component.html',
  styleUrls: ['./allcollections.component.css']
})
export class AllcollectionsComponent implements OnInit {

  TC : trending[];
  constructor(private trendingservices : TrendingService ) { }

  ngOnInit(): void {
    this.TC = this.trendingservices.gettrending();
  }
}

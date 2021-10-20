import { Component, OnInit } from '@angular/core';
import { trending } from 'src/app/shared/trending_collections';
import { TrendingService } from 'src/app/services/trending.service';
import { ApiService } from 'src/app/services/api/api.service';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  TC : trending[];
 
  constructor(private trendingservices : TrendingService,
    private apiService: ApiService) { }

  ngOnInit(): void {
    this.TC = this.trendingservices.gettrending();
   
  }

}

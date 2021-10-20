import { Component, OnInit } from '@angular/core';
import { TrendingService } from 'src/app/services/trending.service';
import { Params,ActivatedRoute } from '@angular/router';
import { trending } from 'src/app/shared/trending_collections';
import { NowshowingService } from 'src/app/services/nowshowing.service';
import { nowshowing } from 'src/app/shared/nowshowing';
import { Router } from '@angular/router';


@Component({
  selector: 'app-collection',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  collection: trending;
  COLLECTIONS: trending[];
  NS: nowshowing[];

  constructor(private route: ActivatedRoute,
    private collectionservice: TrendingService,
    private NOWSHOWING : NowshowingService,
    private router: Router) { }

  ngOnInit(): void {
    const title = this.route.snapshot.params['title'];
    this.collection = this.collectionservice.getbytitle(title);
    this.COLLECTIONS = this.collectionservice.gettrending();  
    this.NS = this.NOWSHOWING.getnow();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
}

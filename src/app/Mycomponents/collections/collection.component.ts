import { Component, OnInit } from '@angular/core';
import { TrendingService } from 'src/app/services/trending.service';
import { Params,ActivatedRoute } from '@angular/router';
import { trending } from 'src/app/shared/trending_collections';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  collection: trending;
  
  constructor(private route: ActivatedRoute,
    private collectionservice: TrendingService) { }

  ngOnInit(): void {
    const title = this.route.snapshot.params['title'];
    this.collection = this.collectionservice.getbytitle(title);
    
  }
}

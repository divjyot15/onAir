import { Injectable } from '@angular/core';
import { trending } from '../shared/trending_collections';
import { TrendingInfo } from '../shared/trending_info'; 


@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  gettrending() : trending[]{
    return TrendingInfo;
  }
  constructor() { }
}

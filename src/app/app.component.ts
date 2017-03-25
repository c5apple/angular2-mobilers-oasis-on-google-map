import { Component, OnInit } from '@angular/core';
import { LatLngLiteral } from 'angular2-google-maps/core';

import { MobilersOasisService } from './service/mobilers-oasis/mobilers-oasis.service';
import { SearchResponse } from './service/mobilers-oasis/interface/search-response';
import { SearchResponseSpot } from './service/mobilers-oasis/interface/search-response-spot';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  lat = 34.7024639; // 大阪駅緯度
  lng = 135.494839; // 大阪駅経度
  zoom = 15;
  latDist = 0.0090133729745762 * 1; // 1km
  lngDist = 0.010966404715491394 * 1; // 1km
  paths: Array<LatLngLiteral> = [];
  oases: SearchResponseSpot[];

  constructor(private mobilersOasis: MobilersOasisService) { }

  ngOnInit() {
    const n = Math.floor((this.lat + this.latDist) * 100000) / 100000;
    const s = Math.floor((this.lat - this.latDist) * 100000) / 100000;
    const w = Math.floor((this.lng - this.lngDist) * 100000) / 100000;
    const e = Math.floor((this.lng + this.lngDist) * 100000) / 100000;
    this.paths = [
      { lat: n, lng: w },
      { lat: n, lng: e },
      { lat: s, lng: e },
      { lat: s, lng: w }
    ];

    this.mobilersOasis.search(n, s, w, e, this.lat, this.lng).then((sr: SearchResponse) => {
      let i = 0;
      this.oases = sr.results.map(result => {
        result.index = ++i;
        return result;
      });
      console.log('this.oases', this.oases);
    });
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { LatLngLiteral } from 'angular2-google-maps/core';

import { SearchResponse, SearchResponseSpot } from '../service/mobilers-oasis';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  @Input() lat: number;
  @Input() lng: number;
  @Input() zoom: number;
  @Input() paths: Array<LatLngLiteral> = [];
  @Input() oases: SearchResponseSpot[];

  constructor() { }

  ngOnInit() {
  }

}
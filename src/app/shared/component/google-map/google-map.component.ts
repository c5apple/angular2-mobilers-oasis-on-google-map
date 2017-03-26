import { Component, OnInit, Input } from '@angular/core';
import { LatLngLiteral } from 'angular2-google-maps/core';

import { DialogService } from '../../service/dialog/dialog.service';
import { SearchResponse, SearchResponseSpot } from '../../service/mobilers-oasis';

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

  constructor(private dialog: DialogService) { }

  ngOnInit() {
  }

  public openMapInfoWindow(index: number): void {
    this.closeMapInfoWindowAll();
    this.oases[index - 1].isOpened = true;
  }
  public closeMapInfoWindowAll(): void {
    this.oases.forEach(oasis => oasis.isOpened = false);
  }

  /**
   * スポット情報ダイアログを開く
   */
  public openDialog(oasis: SearchResponseSpot): void {
    this.dialog.openDialog(oasis);
  }
}

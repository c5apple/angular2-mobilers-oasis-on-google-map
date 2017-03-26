import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { SearchResponseSpot } from '../../service/mobilers-oasis';

@Component({
  selector: 'app-search-response-spot',
  templateUrl: './search-response-spot.component.html',
  styleUrls: ['./search-response-spot.component.scss']
})
export class SearchResponseSpotComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<SearchResponseSpotComponent>) { }

  oasis: SearchResponseSpot;

  isOpenedTag = false;
  isOpenedWireless = false;

  ngOnInit() {
  }

  public toggleOpenedTag() {
    this.isOpenedTag = !this.isOpenedTag;
  }
  public toggleOpenedWireless() {
    this.isOpenedWireless = !this.isOpenedWireless;
  }
}

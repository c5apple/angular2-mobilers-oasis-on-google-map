import { Component, OnInit } from '@angular/core';
import { LatLngLiteral } from 'angular2-google-maps/core';

import { MobilersOasisService, SearchResponse, SearchResponseSpot } from '../../shared/service/mobilers-oasis';

@Component({
  selector: 'app-page-map',
  templateUrl: './page-map.component.html',
  styleUrls: ['./page-map.component.scss']
})
export class PageMapComponent implements OnInit {
  lat: number;
  lng: number;
  zoom = 15;
  latDist = 0.0090133729745762 * 1; // 1km
  lngDist = 0.010966404715491394 * 1; // 1km
  n: number;
  s: number;
  w: number;
  e: number;
  paths: Array<LatLngLiteral> = [];
  oases: SearchResponseSpot[];
  isCurrentPositionGetable: boolean;

  constructor(private mobilersOasis: MobilersOasisService) { }

  ngOnInit() {
    if ("geolocation" in navigator) {
      // 現在地取得
      this.getCurrentPosition();
    } else {
      // デフォルト現在地
      this.setDefaultPosition();
      this.getCurrentPositionCallback();
    }
  }

  /**
   * 現在地を取得する
   */
  public getCurrentPosition() {
    // 現在地取得
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.isCurrentPositionGetable = true;
      this.getCurrentPositionCallback();
    }, (code) => {
      // 現在地取得失敗
      console.error(code);
      // デフォルト現在地
      this.setDefaultPosition();
      this.getCurrentPositionCallback();
    });
  }

  /**
   * デフォルト現在地を設定する
   */
  private setDefaultPosition() {
    this.lat = 34.7024639; // 大阪駅緯度
    this.lng = 135.494839; // 大阪駅経度
  }

  /**
   * 現在取得後コールバック
   */
  private getCurrentPositionCallback(): void {
    this.n = Math.floor((this.lat + this.latDist) * 100000) / 100000;
    this.s = Math.floor((this.lat - this.latDist) * 100000) / 100000;
    this.w = Math.floor((this.lng - this.lngDist) * 100000) / 100000;
    this.e = Math.floor((this.lng + this.lngDist) * 100000) / 100000;

    this.setPath();
    this.searchMobilersOasis();
  }

  /**
   * モバイラーズオアシス電源情報を取得する
   */
  private searchMobilersOasis(): void {
    this.mobilersOasis.search(this.n, this.s, this.w, this.e, this.lat, this.lng).then((sr: SearchResponse) => {
      let i = 0;
      this.oases = sr.results.map(result => {
        result.index = ++i;
        return result;
      });
      console.log('this.oases', this.oases);
    });
  }

  /**
   * 検索範囲を設定する
   */
  private setPath(): void {
    this.paths = [
      { lat: this.n, lng: this.w },
      { lat: this.n, lng: this.e },
      { lat: this.s, lng: this.e },
      { lat: this.s, lng: this.w }
    ];
  }
}

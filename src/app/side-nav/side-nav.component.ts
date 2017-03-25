import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { SearchResponseSpot } from '../service/mobilers-oasis';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Input() oases: SearchResponseSpot[];

  constructor() { }

  ngOnInit() {
  }

  @Output() onCloseMenu = new EventEmitter();
  /**
   * メニューアイコンを閉じる
   */
  public closeMenu() {
    this.onCloseMenu.emit();
  }
}

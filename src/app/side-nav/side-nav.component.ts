import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DialogService } from '../service/dialog/dialog.service';
import { SearchResponseSpot } from '../service/mobilers-oasis';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Input() oases: SearchResponseSpot[];

  constructor(private dialog: DialogService) { }

  ngOnInit() {
  }

  @Output() onCloseMenu = new EventEmitter();
  /**
   * メニューアイコンを閉じる
   */
  public closeMenu(): void {
    this.onCloseMenu.emit();
  }

  /**
   * スポット情報ダイアログを開く
   */
  public openDialog(oasis: SearchResponseSpot): void {
    this.dialog.openDialog(oasis);
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() onOpenMenu = new EventEmitter();
  /**
   * メニューアイコンを開く
   */
  public openMenu() {
    this.onOpenMenu.emit();
  }
}

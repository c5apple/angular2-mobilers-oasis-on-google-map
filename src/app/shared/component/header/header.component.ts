import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  @Output() onOpenMenu = new EventEmitter();
  /**
   * メニューアイコンを開く
   */
  public openMenu() {
    this.onOpenMenu.emit();
  }

  /**
   * 検索
   */
  public goSearch() {
    this.router.navigate(['search']);
  }
}

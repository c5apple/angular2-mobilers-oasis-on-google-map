import { Injectable } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { SearchResponseSpot } from '../mobilers-oasis';
import { SearchResponseSpotComponent } from '../../component/search-response-spot/search-response-spot.component';

@Injectable()
export class DialogService {

  constructor(public dialog: MdDialog) { }

  /**
   * スポット情報ダイアログを開く
   */
  public openDialog(oasis: SearchResponseSpot): MdDialogRef<SearchResponseSpotComponent> {
    let dialogRef: MdDialogRef<SearchResponseSpotComponent>;
    dialogRef = this.dialog.open(SearchResponseSpotComponent);
    dialogRef.componentInstance.oasis = oasis;
    return dialogRef;
  }
}

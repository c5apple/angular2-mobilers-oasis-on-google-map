import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  PageMapComponent,
  PageSearchComponent
} from './page';

const routes: Routes = [
  { path: '', component: PageMapComponent },
  { path: 'search', component: PageSearchComponent },
  { path: '**', component: PageMapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

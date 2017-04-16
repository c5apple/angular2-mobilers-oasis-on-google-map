import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from 'angular2-google-maps/core';
import 'hammerjs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  FooterComponent,
  HeaderComponent,
  SideNavComponent,
  GoogleMapComponent,
  SearchResponseSpotComponent
} from './shared/component';
import {
  DialogService,
  MobilersOasisService,
  MockMobilersOasisService
} from './shared/service';
import {
  PageMapComponent,
  PageSearchComponent
} from './page';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SideNavComponent,
    GoogleMapComponent,
    SearchResponseSpotComponent,
    PageMapComponent,
    PageSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'MY-KEY'
    }),
    AppRoutingModule
  ],
  providers: [
    DialogService,
    // MobilersOasisService
    { provide: MobilersOasisService, useClass: MockMobilersOasisService }
  ],
  entryComponents: [
    SearchResponseSpotComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

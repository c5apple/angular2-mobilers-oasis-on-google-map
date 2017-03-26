import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SideNavComponent,
    GoogleMapComponent,
    SearchResponseSpotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'MY-KEY'
    })
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { SearchResponseSpotComponent } from './search-response-spot/search-response-spot.component';

import { MobilersOasisService, MockMobilersOasisService } from './service/mobilers-oasis';
import { DialogService } from './service/dialog/dialog.service';

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

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

import { MobilersOasisService, MockMobilersOasisService } from './service/mobilers-oasis';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SideNavComponent,
    GoogleMapComponent
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
    // MobilersOasisService
    { provide: MobilersOasisService, useClass: MockMobilersOasisService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

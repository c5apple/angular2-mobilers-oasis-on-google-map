import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';

import { MobilersOasisService } from './service/mobilers-oasis/mobilers-oasis.service';
import { MockMobilersOasisService } from './service/mobilers-oasis/mobilers-oasis.service.mock';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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

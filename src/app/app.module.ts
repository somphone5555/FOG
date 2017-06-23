import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/***Angular Libary*/
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdCardModule, MdDialogModule, MdGridListModule, MdIconModule, MdIconRegistry, MdInputModule,
  MdMenuModule,
  MdProgressSpinnerModule,
  MdSidenavModule,
  MdToolbarModule, MdTooltipModule
} from '@angular/material';
import 'hammerjs';
import {PushNotificationsModule, SimpleNotificationsModule} from 'angular2-notifications';

/***Angular Component*/
import { MapComponent } from './map/map.component';
import { WeatherComponent } from './weather/weather.component';
import { HistoryComponent } from './history/history.component';
import { HisdetailComponent } from './history/hisdetail/hisdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WeatherComponent,
    HistoryComponent,
    HisdetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdToolbarModule,
    MdMenuModule,
    MdCardModule,
    MdInputModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdTooltipModule,
    MdGridListModule,
    MdSidenavModule,
    MdDialogModule,
    PushNotificationsModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }

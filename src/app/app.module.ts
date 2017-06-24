import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

/** App router config */
import {appRoutes} from './app.router';

/** Google Maps Module */
import {AgmCoreModule} from '@agm/core';

/** angular Firebase 2 module*/
import { AngularFireModule } from 'angularfire2';
import {environment} from '../environments/environment';

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
import { FlexLayoutModule } from '@angular/flex-layout';

/***Angular Component*/
import { MapComponent } from './map/map.component';
import { WeatherComponent } from './weather/weather.component';
import { HistoryComponent } from './history/history.component';
import { HisdetailComponent } from './history/hisdetail/hisdetail.component';
import { SettingComponent } from './setting/setting.component';
import { AboutComponent } from './about/about.component';

import {WmService} from './Services/wm.service';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WeatherComponent,
    HistoryComponent,
    HisdetailComponent,
    SettingComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
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
    FlexLayoutModule,
    PushNotificationsModule,
    SimpleNotificationsModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBXoeOmRRzSl0b4iUBadAz8M-_Zva0DpfQ'
    }),
    AngularFireModule.initializeApp(environment.firebase, 'WMdb'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    appRoutes
  ],
  providers: [MdIconRegistry, WmService],
  bootstrap: [AppComponent]
})
export class AppModule { }

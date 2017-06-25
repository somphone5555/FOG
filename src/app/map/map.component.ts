import {Component, OnInit} from '@angular/core';
import {WmService} from '../Services/wm.service';
import {NotificationsService} from 'angular2-notifications';
import {HistoryService} from '../Services/history.service';

@Component({
  selector: 'app-map',
  template: `
    <agm-map [latitude]="lat" [longitude]="lng" (mapClick)="newMarker($event)">
      <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
    </agm-map>

    <md-card *ngIf="checkShowWeather">
      <button mdTooltip="Saved weather & city" md-mini-fab style="position: absolute;right: 5px;top:5px;"
              (click)="saveCity()">
        <md-icon>add</md-icon>
      </button>
      <div fxLayout="row" fxLayoutAlign="space-between none">
        <div>
          <md-card-title style="font-size: 25px">{{markerWeather?.display_location?.country}}</md-card-title>
          <md-card-subtitle style="font-size: 15px">{{markerWeather?.display_location?.city}}</md-card-subtitle>
        </div>
        <div>

        </div>
      </div>
      <md-card-content class="weathercontent">

        <div fxLayout="row">
          <span fxFlex="50" style="font-size: 50px;">{{markerWeather?.temp_c}}ໍ </span>
          <span fxFlex="50">
            <img [src]='markerWeather?.icon_url'
                 alt='Icon depicting current weather.' width="100">
          </span>
          <md-card-subtitle>{{markerWeather?.weather}}</md-card-subtitle>
        </div>
        <div fxLayout="row" fxLayoutAlign="space-between center" style="font-size: 1em">
          <div fxFlex="50" style="font-size: 1rem">

          </div>
        </div>
        <strong>Wind : </strong><span>{{markerWeather?.wind_string}}</span><br>
      </md-card-content>
    </md-card>
    <simple-notifications [options]="savedOpton"></simple-notifications>
  `,
  styles: [`
    agm-map {
      width: 100%;
      height: 91%;
    }

    md-card {
      position: absolute;
      left: 5px;
      bottom: 10px;
      width: 180px;
    }
  `],
  providers: [HistoryService]
})
export class MapComponent implements OnInit {

  markerWeather: Object;
  checkShowWeather = false;
  lat: number;
  lng: number;

  savedOpton = {
    timeOut: 3000,
    lastOnButtom: true,
    showProgressBar: true,
    clickToClose: true,
    animate: 'fromRight',
    pauseOnHover: true
  };

  constructor(private wmService: WmService, private notification: NotificationsService, private historyService: HistoryService) {
  }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.getWeather();
      });
    }
  }

  newMarker($event) {
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    console.log($event.coords.lat, '  ', $event.coords.lng);
    this.getWeather();
  }

  getWeather() {
    this.wmService.getWeather(this.lat, this.lng).subscribe(success => {
      this.markerWeather = success.current_observation;
      this.checkShowWeather = true;
      setTimeout(() => {
        this.checkShowWeather = false;
      }, 10000)
    }, err => {
      console.log(err);
    });
  }

  saveCity() {
    if (this.historyService.saveHistory(this.markerWeather)) {
      this.notification.success('Saved', 'Your city is saved successfully', this.savedOpton);
    } else {
      this.notification.error('Error', 'Somthing went wrong', this.savedOpton);
    }
  }
}

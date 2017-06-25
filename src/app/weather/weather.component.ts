import {Component, OnInit} from '@angular/core';
import {WmService} from '../Services/wm.service';

@Component({
  selector: 'app-weather',
  template: `

    <div fxLayout.lg="row" fxLayout.sm="column" fxLayout.xs="column" fxLayoutAlign="center stretch">
      <div fxFlex="30">
        <md-card *ngIf="checkFirstArea">
          <div fxLayout="row" fxLayoutAlign="space-between none">
            <div>
              <md-card-title style="font-size: 30px">{{firstArea?.sys?.country}}</md-card-title>
              <md-card-subtitle style="font-size: 20px">{{firstArea?.name}}</md-card-subtitle>
            </div>
            <div>
              <md-card-title>{{firstArea?.weather[0]?.main}}</md-card-title>
              <md-card-subtitle>{{firstArea?.weather[0]?.description}}</md-card-subtitle>
            </div>
          </div>
          <md-card-content class="weathercontent">
            <div fxLayout="row">
              <span fxFlex="50" style="font-size: 70px;">{{firstArea.main.temp - 273 | number: '1.0-0'}}ໍ </span>
              <span fxFlex="50"><img src='http://openweathermap.org/img/w/{{firstArea?.weather[0]?.icon}}.png'
                                     alt='Icon depicting current weather.' width="100"></span>
            </div>
            <div fxLayout="row" fxLayoutAlign="space-between center" style="font-size: 1em">
              <div fxFlex="50" style="font-size: 1rem">
                <strong>Wind : </strong><span>{{firstArea?.wind?.speed}}</span>
              </div>
            </div>
            <agm-map style="height: 380px" md-card-image [latitude]="lat" [longitude]="lng" (mapClick)="newMarker($event)">
              <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
            </agm-map>
          </md-card-content>
        </md-card>
      </div>
      <div fxFlex="50" fxLayout="column">
        <md-card *ngFor="let area of areas">
          <div fxLayout="row" fxLayoutAlign="space-between stretch">
            <div fxFlex="30">
              <md-card-title style="font-size: 32px">{{area?.sys?.country}}</md-card-title>
              <md-card-subtitle style="font-size: 22px">{{area?.name}}</md-card-subtitle>
            </div>
            <div fxLayout="column">
              <span><img src='http://openweathermap.org/img/w/{{area?.weather[0]?.icon}}.png'
                         alt='Icon depicting current weather.'></span>
              <span style="font-size: 50px;">{{area.main.temp - 273 | number: '1.0-0'}}ໍ </span>&nbsp;
            </div>
            <div style="text-align: right;margin-top: 4rem">
              <h4>{{area?.weather[0]?.main}}</h4>
              <p>{{area?.weather[0]?.description}}</p>
            </div>
          </div>
        </md-card>
      </div>

    </div>
  `,
  styles: [`
    md-grid-list {
      margin-top: 2rem;
    }

    md-card {
      margin: 1rem;
      height: 100%;
    }
    agm-map{
      margin-top: 5rem;
      width: 100%;
      height: 400px;
    }
  `]
})
export class WeatherComponent implements OnInit {
  areas = [];
  firstArea = {};
  checkFirstArea: boolean;
  lat: number;
  lng: number;

  constructor(private wmService: WmService) {
    this.checkFirstArea = false;
  }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        this.lat = lat;
        this.lng = lng;
        this.wmService.getWeather(lat, lng).subscribe(success => {
          this.areas = success['list'];
          this.firstArea = this.areas[0];
          this.areas.shift();
          this.checkFirstArea = true;
          console.log(this.firstArea);
          console.log(this.areas);
        }, error => {
          console.log(error);
        });
      });
    }
  }

  newMarker($event) {
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    this.wmService.getWeather(this.lat, this.lng).subscribe(success => {
      this.areas = success['list'];
      this.firstArea = this.areas[0];
      this.areas.shift();
      this.checkFirstArea = true;
      console.log(this.firstArea);
      console.log(this.areas);
    }, error => {
      console.log(error);
    });
  }

}

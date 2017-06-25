import {Component, OnInit} from '@angular/core';
import {WmService} from '../Services/wm.service';

@Component({
  selector: 'app-map',
  template: `
    <agm-map [latitude]="lat" [longitude]="lng" (mapClick)="newMarker($event)">
      <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
    </agm-map>
    <md-card>
      <button md-mini-fab style="position: absolute;right: 5px;top:5px;"><md-icon>add</md-icon></button>
      <div fxLayout="row" fxLayoutAlign="space-between none">
        <div>
          <md-card-title style="font-size: 25px">LA</md-card-title>
          <md-card-subtitle style="font-size: 15px">Vientaine</md-card-subtitle>
        </div>
        <div>

        </div>
      </div>
      <md-card-content class="weathercontent">
        
        <div fxLayout="row">
          <span fxFlex="50" style="font-size: 50px;">30ໍ </span>
          <span fxFlex="50">
            <!--<img [src]='firstArea?.icon_url'
                                 alt='Icon depicting current weather.' width="100">-->
            <md-icon style="font-size: 40px">cloud</md-icon>
          </span>
          <md-card-subtitle>cloud</md-card-subtitle>
        </div>
        <div fxLayout="row" fxLayoutAlign="space-between center" style="font-size: 1em">
          <div fxFlex="50" style="font-size: 1rem">

          </div>
        </div>
        <strong>Wind : </strong><span>dmdkdkkdkd ldk dkf</span><br>
      </md-card-content>
    </md-card>
  `,
  styles: [`
    agm-map{
      width: 100%;
      height: 91%;
    }
    md-card{
      position: absolute;
      left: 5px;
      bottom: 10px;
      width: 180px;
    }
  `]
})
export class MapComponent implements OnInit {

  markerWeather: Object;
  checkShowWeather = false;
  lat: number;
  lng: number;

  constructor(private wmService: WmService) {
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
      console.log(this.markerWeather);
    }, err => {
      console.log(err);
    });
  }
}

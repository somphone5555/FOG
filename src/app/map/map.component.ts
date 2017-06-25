import {Component, OnInit} from '@angular/core';
import {WmService} from '../Services/wm.service';

@Component({
  selector: 'app-map',
  template: `
    <agm-map [latitude]="lat" [longitude]="lng" (mapClick)="newMarker($event)">
      <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
    </agm-map>
  `,
  styles: [`
    agm-map{
      width: 100%;
      height: 91%;
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

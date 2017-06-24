import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  template: `
    <agm-map [latitude]="lat" [longitude]="lng" (mapClick)="setNewMarker($event)">
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

  lat: number;
  lng: number;

  constructor() {
  }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

  setNewMarker($event: MouseEvent) {
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
  }
}

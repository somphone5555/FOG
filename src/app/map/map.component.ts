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

  lat: number;
  lng: number;

  constructor(private wmService: WmService) {
  }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.getWEOID();
      });
    }
  }
  newMarker($event) {
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    console.log($event.coords.lat, '  ', $event.coords.lng);
    this.getWEOID();
  }
  getWEOID() {
    this.wmService.getMaps(this.lat, this.lng).subscribe(success => {
      console.log(success);
    }, err => {
      console.log(err);
    });
  }
}

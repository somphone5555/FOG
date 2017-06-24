import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  template: `
    <md-grid-list cols="1" rowHeight="2:1">
      <md-grid-tile>
        <md-card>
          <md-card-header>
            <md-card-header>
              <md-card-title>Laos</md-card-title>
              <md-card-subtitle>Vientaine</md-card-subtitle>
            </md-card-header>
          </md-card-header>
          <md-card-content class="weathercontent">
            <img style="width: 72px;" src="../favicon.ico">
            <span>60*</span>
          </md-card-content>
        </md-card>
      </md-grid-tile>

    </md-grid-list>
  `,
  styles: []
})
export class WeatherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

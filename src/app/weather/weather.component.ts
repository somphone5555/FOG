import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather',
  template: `
    <!--    <md-grid-list cols="2" rowHeight="400px">
          <md-grid-tile>
            <md-card>
            <h1>Laos</h1>
              <h3>Vientaine</h3>
              <md-card-content class="weathercontent">
                <span>60ໍ</span>&nbsp;&nbsp;<md-icon style="font-size: 100px">cloud</md-icon>
                <md-card-title><span>N 80ໍ</span>&nbsp;<span>50'</span></md-card-title>
                <md-card-subtitle>sfsdfsdf</md-card-subtitle>
              </md-card-content>
            </md-card>
          </md-grid-tile>
          <md-grid-tile>
            <md-card>
              <h1>Laos</h1>
              <h3>Vientaine</h3>
              <md-card-content class="weathercontent">
                <span>60ໍ</span>&nbsp;&nbsp;&nbsp;&nbsp;<md-icon style="font-size: 100px">cloud</md-icon>
                <md-card-title><span>N 80ໍ</span>&nbsp;<span>50'</span></md-card-title>
                <md-card-subtitle>sfsdfsdf</md-card-subtitle>
              </md-card-content>
            </md-card>
          </md-grid-tile>
        </md-grid-list>-->

    <div fxLayout.lg="row" fxLayout.sm="column" fxLayout.xs="column" fxLayoutAlign="center stretch">
      <div fxFlex="30">
        <md-card>
          <h1>Laos</h1>
          <h3>Vientaine</h3>
          <md-card-content class="weathercontent">
            <div fxLayout="row">
              <span fxFlex="50">60ໍ</span>
              <span fxFlex="50"><md-icon style="font-size: 100px">cloud</md-icon></span>
            </div>
            <md-card-title><span>N 80ໍ</span>&nbsp;<span>50'</span></md-card-title>
            <md-card-subtitle>sfsdfsdf</md-card-subtitle>
          </md-card-content>
        </md-card>
      </div>
      <div fxFlex="60">
        <md-card>
          <h1>Laos</h1>


        </md-card>
      </div>

    </div>
  `,
  styles: [`
    md-grid-list {
      margin-top: 2rem;
    }

    .weathercontent {
      font-size: 100px;
    }

    md-card {
      margin: 1rem;
      height: 100%;
    }

  `]
})
export class WeatherComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

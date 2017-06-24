import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather',
  template: `

    <div fxLayout.lg="row" fxLayout.sm="column" fxLayout.xs="column" fxLayoutAlign="center stretch">
      <div fxFlex="30">
        <md-card>
          <div fxLayout="row" fxLayoutAlign="space-between none">
            <div>
              <md-card-title style="font-size: 72px">LA</md-card-title>
              <md-card-subtitle style="font-size: 42px">Vientaine</md-card-subtitle>
            </div>
            <div>
              <md-card-title>Cloud</md-card-title>
              <md-card-subtitle>Light cloud</md-card-subtitle>
            </div>
          </div>
          <md-card-content class="weathercontent">
            <div fxLayout="row">
              <span fxFlex="50" style="font-size: 100px;">60ໍ</span>
              <span fxFlex="50"><md-icon style="font-size: 100px">cloud</md-icon></span>
            </div>
            <div fxLayout="row" fxLayoutAlign="space-between center" style="font-size: 1em">
              <div fxFlex="50">Max:<span>62ໍ</span>&nbsp;&nbsp;Min:<span>30ໍ</span></div>
              <div fxFlex=50><span>Wind</span>&nbsp;&nbsp;<span>Nໍ</span><span>256</span></div>
            </div>
          </md-card-content>
        </md-card>
      </div>
      <div fxFlex="50" fxLayout="column">
        <md-card>
          <div fxLayout="row" fxLayoutAlign="space-between stretch">
            <div>
              <md-card-title style="font-size: 32px">LA</md-card-title>
              <md-card-subtitle style="font-size: 22px">Vientaine</md-card-subtitle>
            </div>
            <div fxLayout="row">
              <span style="font-size: 50px;">60ໍ</span>&nbsp;
              <span><md-icon style="font-size: 50px">cloud</md-icon></span>
            </div>
            <div>
              <md-card-title>Cloud</md-card-title>
              <md-card-subtitle>Light cloud</md-card-subtitle>
            </div>
          </div>
        </md-card>
        <md-card>
          <div fxLayout="row" fxLayoutAlign="space-between stretch">
            <div>
              <md-card-title style="font-size: 32px">LA</md-card-title>
              <md-card-subtitle style="font-size: 22px">Vientaine</md-card-subtitle>
            </div>
            <div fxLayout="row">
              <span style="font-size: 50px;">60ໍ</span>&nbsp;
              <span><md-icon style="font-size: 50px">cloud</md-icon></span>
            </div>
            <div>
              <md-card-title>Cloud</md-card-title>
              <md-card-subtitle>Light cloud</md-card-subtitle>
            </div>
          </div>
        </md-card>
        <md-card>
          <div fxLayout="row" fxLayoutAlign="space-between stretch">
            <div>
              <md-card-title style="font-size: 32px">LA</md-card-title>
              <md-card-subtitle style="font-size: 22px">Vientaine</md-card-subtitle>
            </div>
            <div fxLayout="row">
              <span style="font-size: 50px;">60ໍ</span>&nbsp;
              <span><md-icon style="font-size: 50px">cloud</md-icon></span>
            </div>
            <div>
              <md-card-title>Cloud</md-card-title>
              <md-card-subtitle>Light cloud</md-card-subtitle>
            </div>
          </div>
        </md-card>
        <md-card>
          <div fxLayout="row" fxLayoutAlign="space-between stretch">
            <div>
              <md-card-title style="font-size: 32px">LA</md-card-title>
              <md-card-subtitle style="font-size: 22px">Vientaine</md-card-subtitle>
            </div>
            <div fxLayout="row">
              <span style="font-size: 50px;">60ໍ</span>&nbsp;
              <span><md-icon style="font-size: 50px">cloud</md-icon></span>
            </div>
            <div>
              <md-card-title>Cloud</md-card-title>
              <md-card-subtitle>Light cloud</md-card-subtitle>
            </div>
          </div>
        </md-card>
        <md-card>
          <div fxLayout="row" fxLayoutAlign="space-between stretch">
            <div>
              <md-card-title style="font-size: 32px">LA</md-card-title>
              <md-card-subtitle style="font-size: 22px">Vientaine</md-card-subtitle>
            </div>
            <div fxLayout="row">
              <span style="font-size: 50px;">60ໍ</span>&nbsp;
              <span><md-icon style="font-size: 50px">cloud</md-icon></span>
            </div>
            <div>
              <md-card-title>Cloud</md-card-title>
              <md-card-subtitle>Light cloud</md-card-subtitle>
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

  `]
})
export class WeatherComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

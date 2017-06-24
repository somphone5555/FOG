import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <md-toolbar color="primary">
      <button type="button" md-fab (click)="sidenav.toggle()">
        <md-icon>dashboard</md-icon>
      </button>
    </md-toolbar>

    <md-sidenav-container fullscreen>

      <md-sidenav #sidenav mode="over">
        <button md-fab style="left: 33%;margin-top: 2rem;margin-bottom: 2rem">
          <md-icon>home</md-icon>
        </button>
        <button md-button class="asbtn">
          <md-icon>cloud</md-icon>
          Weather
        </button>
        <button md-button class="asbtn">
          <md-icon class="asicon">place</md-icon>
          Map
        </button>
        <button md-button class="asbtn">
          <md-icon>history</md-icon>
          History
        </button>
        <button md-button class="asbtn">
          <md-icon>settings</md-icon>
          Setting
        </button>
        <button md-button class="asbtn">
          <md-icon>sentiment_very_satisfied</md-icon>
          About
        </button>

      </md-sidenav>

      <md-grid-list cols="1" rowHeight="300px">
        <md-grid-tile>
          <md-card>
            <md-card-header>
              <md-card-header>
                <md-card-title>Laos</md-card-title>
                <md-card-subtitle>Vientaine</md-card-subtitle>
              </md-card-header>
            </md-card-header>
            <md-card-content class="weathercontent">

              <md-grid-list cols="2">
                <md-grid-tile>
                  <md-icon style="font-size: 72px">home</md-icon>
                </md-grid-tile>
                <md-grid-tile><p>60ໍ</p></md-grid-tile>
              </md-grid-list>
            </md-card-content>
          </md-card>
        </md-grid-tile>

      </md-grid-list>

    </md-sidenav-container>

    <button md-fab class="savebtn">
      <md-icon>add</md-icon>
    </button>
  `,
  styles: [`
    md-sidenav {
      width: 200px;
    }

    md-toolbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 60px;
      z-index: 999;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.24);
    }

    md-sidenav-container {
      margin-top: 4rem;

    }

    md-grid-list {
      margin-top: 2rem;
    }

    .asbtn {
      width: 100%;
      text-align: left;
      font-size: 20px;
    }

    .savebtn {
      position: absolute;
      right: 20px;
      bottom: 10px;
    }

    .weathercontent {
      font-size: 100px;
      flex: 50%;
    }

    md-card {
      width: 400px;
    }

  `]
})
export class AppComponent {
  title = 'app';
}

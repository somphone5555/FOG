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
        <a routerLink='' md-fab style="left: 33%;margin-top: 2rem;margin-bottom: 2rem">
          <md-icon>home</md-icon>
        </a>
        <a routerLink='' md-button class="asbtn">
          <md-icon>cloud</md-icon>
          Weather
        </a>
        <a routerLink='map' md-button class="asbtn">
          <md-icon class="asicon">place</md-icon>
          Map
        </a>
        <a routerLink='history' md-button class="asbtn">
          <md-icon>history</md-icon>
          History
        </a>
        <a routerLink='setting' md-button class="asbtn">
          <md-icon>settings</md-icon>
          Setting
        </a>
        <a routerLink='about' md-button class="asbtn">
          <md-icon>sentiment_very_satisfied</md-icon>
          About
        </a>

      </md-sidenav>

      <router-outlet></router-outlet>
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
    }

  `]
})
export class AppComponent {
  title = 'app';
}

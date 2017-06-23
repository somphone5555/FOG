import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <md-sidenav-container fullscreen>

      <md-sidenav #sidenav mode="over">
        <button md-fab style="left: 33%;margin-top: 2rem;margin-bottom: 2rem"><md-icon>home</md-icon></button>
        <button md-button class="asbtn">
          <md-icon>cloud</md-icon>
          Weather
        </button>
        <button md-button class="asbtn"><md-icon class="asicon">place</md-icon> Map</button>
        <button md-button class="asbtn"><md-icon>history</md-icon> History</button>
        <button md-button class="asbtn"><md-icon>settings</md-icon> Setting</button>
        <button md-button class="asbtn"><md-icon>sentiment_very_satisfied</md-icon> About</button>


      </md-sidenav>
      <md-toolbar color="primary">
        <button type="button" md-fab (click)="sidenav.open()">
          <md-icon>dashboard</md-icon>
        </button>
      </md-toolbar>

    </md-sidenav-container>
  `,
  styles: [`
    md-sidenav {
      width: 200px;
    }

    .asbtn {
      width: 100%;
      text-align: left;
      font-size: 20px;

    }
    asicon {
      
    }

  `]
})
export class AppComponent {
  title = 'app';
}

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
        <a routerLink='' md-fab style="left: 33%;margin-top: 2rem;margin-bottom: 2rem" (click)="sidenav.close()">
          <md-icon>home</md-icon>
        </a>
        <a routerLink='' md-button class=" asbtn" (click)="sidenav.close()">
        <md-icon>cloud</md-icon>
        Weather
        </a>
        <a routerLink='map' md-button class="asbtn" (click)="sidenav.close()">
          <md-icon class="asicon">place</md-icon>
          Map
        </a>
        <a routerLink='history' md-button class="asbtn" (click)="sidenav.close()">
          <md-icon>history</md-icon>
          History
        </a>
        <a routerLink='setting' md-button class="asbtn" (click)="sidenav.close()">
          <md-icon>settings</md-icon>
          Setting
        </a>
        <a routerLink='about' md-button class="asbtn" (click)="sidenav.close()">
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


    .asbtn {
    width: 100%;
    text-align: left;
    font-size: 20px;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }

    .savebtn {
    position: absolute;
    right: 20px;
    bottom: 10px;
    }



  `]
})
export class AppComponent {
  title = 'app';
}

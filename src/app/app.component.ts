import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <md-sidenav-container fullscreen>

      <md-sidenav #sidenav mode="over">

          <button md-button class="asbtn"> Pepper </button>
          <button md-button class="asbtn"> Pepper </button>
          <button md-button class="asbtn"> Pepper </button>


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
    }
  `]
})
export class AppComponent {
  title = 'app';
}

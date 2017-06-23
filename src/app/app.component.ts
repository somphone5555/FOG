import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <md-sidenav-container fullscreen>

      <md-sidenav #sidenav mode="over">
        Jolly good!
      </md-sidenav>
      <md-toolbar color="primary">
        <button type="button" md-button (click)="sidenav.open()">
          <md-icon>dashboard</md-icon>
        </button>
      </md-toolbar>

    </md-sidenav-container>
  `,
  styles: [`
    md-sidenav {
      width: 200px;
    }
  `]
})
export class AppComponent {
  title = 'app';
}

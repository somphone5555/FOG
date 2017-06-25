import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  template: `
    <div fxLayout="column" fxLayoutAlign="center center">
      <md-card>
        <div fxFlex="50">
          <md-grid-tile>Current Weather</md-grid-tile>
          <md-card-subtitle>LA</md-card-subtitle>
          <md-card-subtitle>Vientaine</md-card-subtitle>

        </div>
        <div fxFlex="50">
          <md-card-title>Saved Weather</md-card-title>
          <md-card-subtitle>LA</md-card-subtitle>
          <md-card-subtitle>Vientaine</md-card-subtitle>
        </div>

      </md-card>
    </div>
  `,
  styles: []
})
export class HistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-history',
  template: `
    <div fxLayout="row">
    <div fxFlex.lg="20" fxFlex.sm="0" fxFlex.xs="0"></div>
    <div fxLayout="column" fxFlex.lg="60" fxFlex.sm="100" fxFlex.xs="100">
      <md-card>
        <div fxLayout="row" fxLayoutAlign="space-between stretch">
          <div fxFlex="50" fxLayout="column">
            
            <md-card-title style="font-size: 42px">La</md-card-title>
            <md-card-subtitle style="font-size: 22px">Vientaine</md-card-subtitle>
            <md-card-title>Now</md-card-title>
            <span><md-icon style="font-size: 50px;">cloud</md-icon></span>
            <span style="font-size: 50px;">30ໍ </span>
            <p>Cloud <br>Boken cloud</p>

          </div>
          <div fxFlex="50" fxLayout="column" style="margin-top: 4rem">
            <button md-fab class="removebtn"><md-icon>remove</md-icon></button>
            <md-card-title>History</md-card-title>
            <span><md-icon>cloud</md-icon></span>
            <span style="font-size: 50px;">30ໍ </span>
            <p>Cloud <br>Boken cloud</p>
          </div>
          <div fxFlex="10">
            
          </div>
        </div>
      </md-card>
      
    </div>
    </div>
  `,
  styles: [`
    md-card {

      margin: 1rem;
    }
    removebtn{
      top: 5px;
      right: 5px;
    }
  `]
})
export class HistoryComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

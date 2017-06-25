import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-history',
  template: `
    <div fxLayout="row">
    <div fxFlex.lg="20" fxFlex.sm="0" fxFlex.xs="0"></div>
    <div fxLayout="column" fxFlex.lg="60" fxFlex.sm="100" fxFlex.xs="100">
      <md-card>
        <button md-mini-fab class="removebtn"><md-icon>remove</md-icon></button>
        <md-card-title style="font-size: 42px">La</md-card-title>
        <md-card-subtitle style="font-size: 22px">Vientaine ssdfsfd sdfsdfs</md-card-subtitle>
        <div fxLayout="row" fxLayoutAlign="space-between stretch">
          <div fxFlex="50" fxLayout="column">
            
            
            <md-card-title>Now</md-card-title>
            <span><md-icon style="font-size: 50px;">cloud</md-icon></span>
            <span style="font-size: 50px;">30ໍ </span>
            <p>Cloud <br>Boken cloud</p>

          </div>
          <div fxFlex="50" fxLayout="column">
            <md-card-title>History</md-card-title>
            <br>
            <span><md-icon>cloud</md-icon></span>
            <span style="font-size: 50px;">30ໍ </span>
            <p>Cloud <br>Boken cloud</p>
          </div>
          
        </div>
      </md-card>
      <md-card>
        <button md-mini-fab class="removebtn"><md-icon>remove</md-icon></button>
        <md-card-title style="font-size: 42px">La</md-card-title>
        <md-card-subtitle style="font-size: 22px">Vientaine ssdfsfd sdfsdfs</md-card-subtitle>
        <div fxLayout="row" fxLayoutAlign="space-between stretch">
          <div fxFlex="50" fxLayout="column">


            <md-card-title>Now</md-card-title>
            <span><md-icon style="font-size: 50px;">cloud</md-icon></span>
            <span style="font-size: 50px;">30ໍ </span>
            <p>Cloud <br>Boken cloud</p>

          </div>
          <div fxFlex="50" fxLayout="column">
            <md-card-title>History</md-card-title>
            <br>
            <span><md-icon>cloud</md-icon></span>
            <span style="font-size: 50px;">30ໍ </span>
            <p>Cloud <br>Boken cloud</p>
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
    .removebtn {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  `]
})
export class HistoryComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

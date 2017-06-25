import {Component, OnInit} from '@angular/core';
import {HistoryService} from '../Services/history.service';
import {WmService} from '../Services/wm.service';
import {NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'app-history',
  template: `
    <div fxLayout="row">
      <div fxFlex.lg="20" fxFlex.sm="0" fxFlex.xs="0"></div>
      <div fxLayout="column" fxFlex.lg="60" fxFlex.sm="100" fxFlex.xs="100">
        <md-card *ngFor="let history of historyDatas; let i = index">
          <button md-mini-fab class="removebtn" (click)="deleteHistory(history.$key)">
            <md-icon>remove</md-icon>
          </button>
          <md-card-title style="font-size: 42px">{{history.display_location.country}}</md-card-title>
          <md-card-subtitle style="font-size: 22px">{{history.display_location.city}}</md-card-subtitle>
          <div fxLayout="row" fxLayoutAlign="space-between stretch">
            <div fxFlex="50" fxLayout="column">

              <md-card-title>Now</md-card-title>
              <span><img [src]='currentWeathers[i]?.icon_url'
                         alt='Icon depicting current weather.' width="100"></span>
              <span style="font-size: 50px;">{{currentWeathers[i]?.temp_c}}ໍໍ </span>
              <p>{{currentWeathers[i]?.weather}}</p>

            </div>
            <div fxFlex="50" fxLayout="column">
              <md-card-title>History</md-card-title>
              <br>
              <span><img [src]='history?.icon_url'
                         alt='Icon depicting current weather.' width="100"></span>
              <span style="font-size: 50px;">{{history.temp_c}}ໍໍ </span>
              <p>{{history.weather}}</p>
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
  `],
  providers: [WmService, HistoryService]
})
export class HistoryComponent implements OnInit {

  historyDatas = [];

  currentWeathers = [];

  savedOpton = {
    timeOut: 3000,
    lastOnButtom: true,
    showProgressBar: true,
    clickToClose: true,
    animate: 'fromRight',
    pauseOnHover: true
  };

  constructor(private historyService: HistoryService, private wmService: WmService, private notification: NotificationsService) {
  }

  ngOnInit() {
    this.historyService.getHistory().subscribe(success => {
      this.currentWeathers = [];
      const data = success;
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        this.wmService.getWeather(data[i]['display_location']['latitude'], data[i]['display_location']['longitude']).subscribe(suc => {
          this.currentWeathers.push(suc.current_observation);
        }, err => {
          console.log(err);
        });
      }
      this.historyDatas = success;
    }, error => {
      console.log(error);
    });
  }

  deleteHistory(key) {
    if(this.historyService.deleteHistory(key)){
      this.notification.success('Saved', 'Your city is saved successfully', this.savedOpton);
    } else {
      this.notification.error('Error', 'Somthing went wrong', this.savedOpton);
    }
  }
}

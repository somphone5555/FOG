import {Component} from '@angular/core';
import {PushNotificationsService} from './Notification/notificationService/push-notifications.service';
import {NotificationsService} from 'angular2-notifications';

declare const Notification: any;

@Component({
  selector: 'app-root',
  template: `
    <md-toolbar color="primary">

      <md-icon style="margin-left: 1rem; cursor: pointer;padding: 1rem;" (click)="sidenav.toggle()">menu</md-icon>

    </md-toolbar>

    <md-sidenav-container fullscreen>

      <md-sidenav #sidenav mode="over">
        <md-slide-toggle [(ngModel)]="checkAllow" (change)="allowNotification()"
                         style="margin-top: 2rem;margin-bottom: 2rem;margin-left: 1rem;"
                         [disabled]="disableNotification"
        >Notification
        </md-slide-toggle>

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
          Saved Cities
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
    <simple-notifications [options]="weatherOpton"></simple-notifications>
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
  `],
  providers: [PushNotificationsService]
})
export class AppComponent {
  checkAllow = false;
  disableNotification = false;
  weatherOpton = {
    timeOut: 3000,
    lastOnButtom: true,
    showProgressBar: true,
    clickToClose: true,
    animate: 'fromRight',
    pauseOnHover: true
  };

  constructor(private notificationService: PushNotificationsService, private notification: NotificationsService) {
    if ('Notification' in window) {
      console.log(Notification.permission);
      if (Notification.permission === 'denied') {
        this.disableNotification = true;
        this.checkAllow = false;
      }
      else if (Notification.permission === 'granted') {
        this.checkAllow = true;
      }
    }
  }

  allowNotification() {
    if ('Notification' in window) {
      Notification.requestPermission((status: any) => {
        Notification.onclick = function(event) {
          console.log(event);
        };
        if (status === 'denied') {
          this.disableNotification = true;
          this.checkAllow = false;
          return;
        }
        if (this.checkAllow) {
          this.notification.info('Weather', 'You will get dialy weather notification every morning', this.weatherOpton);
        }
      });
    }
  }
  checkPermission(){
    if (Notification.permission === 'denied') {
      this.disableNotification = true;
      this.checkAllow = false;
    }
  }

}

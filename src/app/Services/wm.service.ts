import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class WmService {
  server = 'http://api.openweathermap.org';
  query: string;

  constructor(private  httpService: Http) { }
  getWeather(lat: number, long: number) {
    this.query = '/data/2.5/find?lat=' + lat + '&lon=' + long + '&cnt=7&appid=2e2b67c3aa0414eb9b83c1c24193d75c';
    return this.httpService.get(this.server + this.query)
      .map((success) => {
        console.log(success);
        return success.json();
      })
      .catch((error) => {
        return Observable.throw(error.json() || 'Server error');
      });
  }
  getMapWeather(lat: number, long: number) {
    this.query = '/data/2.5/weather?lat=' + lat + '&lon=' + long + '&cnt=20&appid=2e2b67c3aa0414eb9b83c1c24193d75c';
    return this.httpService.get(this.server + this.query)
      .map((success) => {
        return success.json();
      })
      .catch((error) => {
        return Observable.throw(error.json() || 'Server error');
      });
  }
}

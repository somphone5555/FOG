import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class WmService {
  server = 'https://api.wunderground.com';
  query: string;

  constructor(private  httpService: Http) {
  }

  getWeather(lat: number, long: number) {
    this.query = '/api/b7e4ea3b9ecdbe54/conditions/q/' + lat + ',' + long + '.json';
    return this.httpService.get(this.server + this.query)
      .map((success) => {
        return success.json();
      })
      .catch((error) => {
        return Observable.throw(error.json() || 'Server error');
      });
  }

  getMapLocation(lat: number, long: number) {
    this.query = '/api/b7e4ea3b9ecdbe54/geolookup/q/' + lat + ',' + long + '.json';
    return this.httpService.get(this.server + this.query)
      .map((success) => {
        return success.json();
      })
      .catch((error) => {
        return Observable.throw(error.json() || 'Server error');
      });
  }
}

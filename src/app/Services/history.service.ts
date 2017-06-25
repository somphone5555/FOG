import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable()
export class HistoryService {
  db: FirebaseListObservable<any[]>;

  constructor(private  httpService: Http, private firebasedb: AngularFireDatabase) {
    this.db = firebasedb.list('/city');
  }

  getHistory(): FirebaseListObservable<any> {
    return this.db;
  }

  saveHistory(data) {
    return this.db.push(data).then(() => {
      return true;
    }).catch(() => {
      return false;
    });
  }

  deleteHistory(id) {
    const key = id;
    return this.db.remove(key).then(success => {
      return true;
    }, err => {
      return false;
    });
  }
}

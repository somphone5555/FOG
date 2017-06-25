import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class HistoryService {
  db: FirebaseListObservable<any>;
  user: Observable<firebase.User>;

  constructor(private  httpService: Http, private firebasedb: AngularFireDatabase, private afAuth: AngularFireAuth) {
    if (localStorage.getItem('wmUserid')) {
      this.db = firebasedb.list('/' + localStorage.getItem('wmUserid') + '/city');
    }
    this.user = afAuth.authState;
  }

  loginGoogle() {
    if (!localStorage.getItem('wmUserid')) {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(success => {
        this.user.subscribe(success2 => {
          const uid = success2.uid;
          localStorage.setItem('wmUserid', uid);
          this.db = this.firebasedb.list('/' + uid + '/city');
          console.log(uid);
        }, error2 => {
          console.log(error2)
        });
        return this.user;
      }).catch(error => {
        return error;
      });
    } else {
      this.db = this.firebasedb.list('/' + localStorage.getItem('wmUserid') + '/city');
    }
  }

  logout() {
    this.afAuth.auth.signOut();
    localStorage.removeItem('wmUserid')
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

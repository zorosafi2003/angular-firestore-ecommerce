import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean;
  UserRole: string = null;
  userDetails: firebase.User = null;

  constructor(private _AngularFireAuth: AngularFireAuth) {
    this.loadUserData();
  }

  login(username, password) {
    return this._AngularFireAuth.auth.signInWithEmailAndPassword(username, password).then(
      user => {
        this.isAuth = true;
        this.loadUserData();
      }
    )
  }

  register(username, password) {
    return this._AngularFireAuth.auth.createUserWithEmailAndPassword(username, password).then(
      user => {
        this.isAuth = true;
        this.loadUserData();
      }
    )
  }

  logout() {
    this._AngularFireAuth.auth.signOut();
  }

 loadUserData() {
  return  this._AngularFireAuth.authState.subscribe(user => {
      if (user) {
        this.isAuth = true;
        this.userDetails = user;
        return true ;
      }
      return false;
    });
  }
}

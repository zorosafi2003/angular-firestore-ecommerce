import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth:boolean;
  UserRole:string = null ;

  // constructor(private auth: AngularFireAuth) { }

  // login(username, password) {
  //   this.auth.signInWithEmailAndPassword(username, password).then()
  // }

  // logout() {
  //   this.auth.signOut();
  // }
}

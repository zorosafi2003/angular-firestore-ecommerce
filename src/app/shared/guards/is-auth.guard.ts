import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { take ,map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class IsAuthGuard implements CanActivateChild {
  constructor(private _Router:Router ,private _AuthService : AuthService ,
    private _AngularFireAuth : AngularFireAuth){
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> |boolean {
       if (this._AuthService.isAuth == true) {
        return true;
      }

      return this._AngularFireAuth.authState
      .pipe(take(1)).pipe(map(user =>  !!user ))
      .pipe(map(loggedIn => {
        if (!loggedIn) {
        this._Router.navigateByUrl('/admin/login');
        }
        return loggedIn;
      }));
  }
  
}

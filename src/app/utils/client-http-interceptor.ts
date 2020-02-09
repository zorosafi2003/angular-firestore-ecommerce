import { Injectable } from "@angular/core";

import {
  HttpInterceptor,
  HttpHandler,
  HttpEvent,
  HttpRequest,
  HttpResponse,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";

import { Router } from "@angular/router";

import { Observable, throwError } from "rxjs";

import { tap, map, catchError, finalize } from "rxjs/operators";
import { AuthService } from "../shared/services/auth.service";
import { NgxSpinnerService } from "ngx-spinner";

@Injectable()
export class ClientHttpInterceptor implements HttpInterceptor {
  constructor( private _NgxSpinnerService: NgxSpinnerService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // modify request

      this._NgxSpinnerService.show();

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }), catchError((error: HttpErrorResponse) => {
        this._NgxSpinnerService.hide();
        return throwError(error);
      }), finalize(() => {
        this._NgxSpinnerService.hide();
      }));

  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { ToastrModule } from 'ng6-toastr-notifications';
import { NgxSpinnerModule } from "ngx-spinner";
import { SharedModule } from './shared/shared.module';
import { SweetAlert2Module, Sweetalert2ModuleConfig } from "@sweetalert2/ngx-sweetalert2";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxSmartModalModule } from "ngx-smart-modal";
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClientHttpInterceptor } from './utils/client-http-interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule ,
    AngularFireAuthModule ,
    ToastrModule.forRoot(), NgxSpinnerModule ,BrowserAnimationsModule ,
    AppRoutingModule , NgxPaginationModule,SharedModule,   NgxSmartModalModule.forRoot(),
    SweetAlert2Module.forRoot() ,NgSelectModule ,NgxMyDatePickerModule.forRoot() ,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ClientHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

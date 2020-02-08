import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';



@NgModule({
  declarations: [UserComponent, LoginComponent, HomeComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { CategoryComponent } from './views/category/category.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './views/login/login.component';



@NgModule({
  declarations: [AdminComponent, CategoryComponent, DashboardComponent, NavBarComponent, SideBarComponent, FooterComponent, LoginComponent],
  imports: [
    CommonModule , AdminRoutingModule
  ]
})
export class AdminModule { }

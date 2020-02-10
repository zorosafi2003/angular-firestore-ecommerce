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
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AddCategoryPopupComponent } from './components/category/add-category-popup/add-category-popup.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



@NgModule({
  declarations: [AdminComponent, CategoryComponent, DashboardComponent, NavBarComponent, SideBarComponent, FooterComponent, LoginComponent, AddCategoryPopupComponent],
  imports: [
    CommonModule , AdminRoutingModule , FormsModule , ReactiveFormsModule
     ,NgSelectModule , NgxSmartModalModule.forChild() , SweetAlert2Module.forChild()
  ]
})
export class AdminModule { }

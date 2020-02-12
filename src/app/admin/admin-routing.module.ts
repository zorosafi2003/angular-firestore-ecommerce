import { AdminComponent } from './admin.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { CategoryComponent } from './views/category/category.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { IsAuthGuard } from '../shared/guards/is-auth.guard';
import { ProductComponent } from './views/product/product.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard'
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: "",
        component: AdminComponent,
        canActivateChild: [IsAuthGuard],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                data: {
                    title: 'Dashboard'
                }
            },
            {
                path: 'category',
                component: CategoryComponent,
                data: {
                    title: 'Categories'
                }
            },
            {
                path: 'product',
                component: ProductComponent,
                data: {
                    title: 'Products'
                }
            }
        ]
    }
];

export const AdminRoutingModule = RouterModule.forChild(routes);
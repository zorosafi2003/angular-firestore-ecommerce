import { AdminComponent } from './admin.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { CategoryComponent } from './views/category/category.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { IsAuthGuard } from '../shared/guards/is-auth.guard';

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
            }
        ]
    }
];

export const AdminRoutingModule = RouterModule.forChild(routes);
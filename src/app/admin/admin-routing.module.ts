import { AdminComponent } from './admin.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { CategoryComponent } from './views/category/category.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard'
    },
    {
        path: "",
        component: AdminComponent,
        canActivateChild: [],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                data: {
                    title: 'Dashboard'
                }
            },
            {
                path: 'categories',
                component: CategoryComponent,
                data: {
                    title: 'Categories'
                }
            }
        ]
    }
];

export const AdminRoutingModule = RouterModule.forChild(routes);
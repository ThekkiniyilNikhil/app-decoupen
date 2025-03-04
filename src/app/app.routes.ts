import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'search-results',
        loadComponent: () => import('./features/search-results/search-results.component').then(m => m.SearchResultsComponent)
    },
    {
        path: 'property-details',
        loadComponent: () => import('./features/property-details/property-details.component').then(m => m.PropertyDetailsComponent)
    },
    {
        path: 'order-summary',
        loadComponent: () => import('./features/order-summary/order-summary.component').then(m => m.OrderSummaryComponent)
    }
];

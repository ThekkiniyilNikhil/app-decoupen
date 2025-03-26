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
    },
    {
        path: 'payment-details',
        loadComponent: () => import('./features/payment-details/payment-details.component').then(m => m.PaymentDetailsComponent)
    },
    {
        path: 'about-us',
        loadComponent: () => import('./features/about-us/about-us.component').then(m => m.AboutUsComponent)
    },
    {
        path: 'contact-us',
        loadComponent: () => import('./features/contact-us/contact-us.component').then(m => m.ContactUsComponent)
    },
    {
        path: 'privacy-policy',
        loadComponent: () => import('./features/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent)
    },
    {
        path: 'terms-and-conditions',
        loadComponent: () => import('./features/terms-and-conditions/terms-and-conditions.component').then(m => m.TermsAndConditionsComponent)
    },
    {
        path: 'refund-policy',
        loadComponent: () => import('./features/refund-policy/refund-policy.component').then(m => m.RefundPolicyComponent)
    }
];

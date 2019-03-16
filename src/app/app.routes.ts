import { Routes } from '@angular/router';
import { AppAuthGuard } from './app.authguard';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { TableComponent } from './table/table.component';

export const AppRoutes: Routes = [
    {
        path: 'landing',
        component: LandingComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AppAuthGuard],
        data: {
            breadcrumbs: true,
            text: 'Home'
        },
        children: [
            {
                path: 'card',
                component: CardComponent,
                data: {
                    breadcrumbs: true,
                    text: 'Card'
                }
            },
            {
                path: 'table',
                component: TableComponent,
                data: {
                    breadcrumbs: true,
                    text: 'Table'
                }
            }
        ]
    },
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: '**', redirectTo: 'landing' }
];

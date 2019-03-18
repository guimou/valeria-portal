import { Routes } from '@angular/router';
import { AppAuthGuard } from './app.authguard';
import { ApplicationsComponent } from './applications/applications.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { S3explorerComponent } from './s3explorer/s3explorer.component';
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
                path: 'applications',
                component: ApplicationsComponent,
                data: {
                    breadcrumbs: true,
                    text: 'Applications'
                }
            },
            {
                path: 's3explorer',
                component: S3explorerComponent,
                data: {
                    breadcrumbs: true,
                    text: 'Explorateur S3'
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
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];

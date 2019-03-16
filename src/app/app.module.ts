import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BreadcrumbsModule } from '@exalif/ngx-breadcrumbs';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { BsDropdownModule } from 'ngx-bootstrap';
// tslint:disable-next-line:max-line-length
import { CardModule, EmptyStateModule, NotificationService, TableModule, ToastNotificationListModule, VerticalNavigationModule } from 'patternfly-ng';
import { AppAuthGuard } from './app.authguard';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { TableComponent } from './table/table.component';
import { initializer } from './utils/app-init';
import { LandingComponent } from './landing/landing.component';


@NgModule({
    declarations: [
        AppComponent,
        CardComponent,
        TableComponent,
        HomeComponent,
        NavComponent,
        LandingComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(AppRoutes),
        KeycloakAngularModule,
        BreadcrumbsModule.forRoot(),
        VerticalNavigationModule,
        ToastNotificationListModule,
        EmptyStateModule,
        TableModule,
        CardModule,
        BsDropdownModule.forRoot()
    ],
    providers: [
        NotificationService,
        AppAuthGuard,
        {
            provide: APP_INITIALIZER,
            useFactory: initializer,
            multi: true,
            deps: [KeycloakService]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

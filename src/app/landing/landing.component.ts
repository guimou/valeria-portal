import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Action, ActionConfig, EmptyStateConfig } from 'patternfly-ng';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
    actionConfig: ActionConfig;
    emptyStateConfig: EmptyStateConfig;

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.actionConfig = {
            primaryActions: [{
                id: 'action1',
                title: 'Cliquer pour vous connecter',
                tooltip: 'Connectez-vous!'
            }]
        } as ActionConfig;
        this.emptyStateConfig = {
            actions: this.actionConfig,
            title: 'Valeria',
            info: 'De la donnée au savoir...'
        };
    }

    // Actions

    handleAction($event: Action): void {
        console.log('click');
        this.router.navigate(['/home']);
    }

}

import { Component, OnInit } from '@angular/core';
import { Action, ActionConfig, CardConfig } from 'patternfly-ng';
import { MessageService } from '../common/message.service';

@Component({
    selector: 'app-applications',
    templateUrl: './applications.component.html',
    styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
    jupyterActionConfig: ActionConfig;
    ckanActionConfig: ActionConfig;
    gitlabActionConfig: ActionConfig;
    jupyterConfig: CardConfig = {
        title: 'Jupyter',
        noPadding: false
    };
    ckanConfig: CardConfig = {
        title: 'CKAN',
        noPadding: false
    };
    gitlabConfig: CardConfig = {
        title: 'GitLab',
        noPadding: false
    };

    constructor(private messageService: MessageService) {
        // this.messageService.success('Successfully loaded card view');
    }

    ngOnInit() {
        this.jupyterActionConfig = {
            primaryActions: [{
                id: 'action1',
                title: 'Lancez Jupyter!',
                tooltip: 'Cliquer sur le bouton'
            }]
        } as ActionConfig;
        this.ckanActionConfig = {
            primaryActions: [{
                id: 'action1',
                title: 'Lancez CKAN!',
                tooltip: 'Cliquer sur le bouton'
            }]
        } as ActionConfig;
        this.gitlabActionConfig = {
            primaryActions: [{
                id: 'action1',
                title: 'Lancez GitLab!',
                tooltip: 'Cliquer sur le bouton'
            }]
        } as ActionConfig;
    }

    jupyterHandleAction(action: Action): void {
        window.open('https://jupyterhub-valeriademo.svd-pca.svc.ulaval.ca', '_blank');
    }

    ckanHandleAction(action: Action): void {
        window.open('http://ul-svd-ex-cka01.ul.ca/', '_blank');
    }

    gitlabHandleAction(action: Action): void {
        window.open('https://gitlab-valeriademo.svd-pca.svc.ulaval.ca/', '_blank');
    }
}

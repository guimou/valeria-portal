import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmptyStateConfig } from 'patternfly-ng';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    emptyStateConfig: EmptyStateConfig = {
        iconStyleClass: 'fa fa-arrow-circle-left',
        title: 'Bienvenue dans Valeria',
        info: 'Vous pouvez utiliser le menu à gauche pour accéder à vos applications ou à vos environnements.'
    };

    constructor(public route: ActivatedRoute) {
    }

    ngOnInit() {
    }

}

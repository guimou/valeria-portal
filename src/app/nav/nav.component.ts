import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerticalNavigationItem } from 'patternfly-ng/navigation/vertical-navigation/vertical-navigation-item';
import { MessageHistory } from '../common/message-history';
import { MessageService } from '../common/message.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
    username = '';
    notifications: any[];
    messageHistory: MessageHistory[];
    navigationItems: VerticalNavigationItem[] = [
        {
            title: 'Applications',
            iconStyleClass: 'fa pficon-applications',
            url: '/home/applications'
        },
        {
            title: 'Table View',
            iconStyleClass: 'fa fa-table',
            url: '/home/table'
        }
    ];

    mobileItems: VerticalNavigationItem[] = [
        {
            title: 'User',
            iconStyleClass: 'fa pficon-user',
            children: [
                {
                    title: 'Logout',
                }
            ]
        }];

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.handleMobile(event.target.innerWidth);
    }

    handleMobile(width: number) {
        if (width < 768) {

            // do a length check instead of looping to find mobile items
            if (this.navigationItems.length < 3) {
                this.navigationItems = this.navigationItems.concat(this.mobileItems);
            }
        } else {

            this.navigationItems = this.navigationItems.filter(item => {
                if (item.title !== 'User') {
                    return true;
                }
            });

        }
    }

    constructor(public messageService: MessageService, public router: Router) {
    }

    ngOnInit(): void {
        this.notifications = this.messageService.get();

        this.messageHistory = this.messageService.getHistory();

        this.handleMobile(window.screen.width);
    }
}

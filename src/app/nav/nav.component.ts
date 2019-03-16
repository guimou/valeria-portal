import {Component, HostListener, OnInit} from '@angular/core';
import {MessageHistory} from '../common/message-history';
import {MessageService} from '../common/message.service';
import {VerticalNavigationItem} from 'patternfly-ng/navigation/vertical-navigation/vertical-navigation-item';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})

export class NavComponent implements OnInit {
  username = '';
  notifications: any[];
  messageHistory: MessageHistory[];
  navigationItems: VerticalNavigationItem[] = [
    {
      title: 'Card View',
      iconStyleClass: 'fa fa-file',
      url: '/home/card'
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

  constructor(public messageService: MessageService) {
  }

  ngOnInit(): void {
    this.notifications = this.messageService.get();

    this.messageHistory = this.messageService.getHistory();

    this.handleMobile(window.screen.width);
  }
}

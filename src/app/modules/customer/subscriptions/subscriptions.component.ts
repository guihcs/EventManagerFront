import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../services/event/event.service';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  subscribedEvents;

  constructor(
    private eventService: EventService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.eventService.getSubscribedEvents(this.auth.getProfile())
      .then(e => this.subscribedEvents = e);
  }

}

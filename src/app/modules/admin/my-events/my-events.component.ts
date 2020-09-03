import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';
import {EventService} from '../../../services/event/event.service';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent implements OnInit {

  myEvents;

  constructor(
    private authService: AuthService,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.eventService.getCreatedEvents(this.authService.getProfile())
      .then(events => this.myEvents = events);
  }

}

import { Component, OnInit } from '@angular/core';
import {EventDetailsService} from '../services/event-details.service';
import {SubEvent} from '../../../../models/sub.event';

@Component({
  selector: 'app-sub-events',
  templateUrl: './sub-events.component.html',
  styleUrls: ['./sub-events.component.css']
})
export class SubEventsComponent implements OnInit {

  subEvents: SubEvent[];
  subEventTableDisplayColumns = ['name', 'start', 'end', 'price'];

  constructor(
    private eventDetailsService: EventDetailsService
  ) { }

  ngOnInit(): void {
    this.eventDetailsService.getEvent().then(e => {
      this.subEvents = e.subEvents;
      console.log(this.subEvents);

    });
  }

}

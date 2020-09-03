import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventDetailsService} from './services/event-details.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventDetailsService: EventDetailsService
  ) {
  }

  ngOnInit(): void {
    let routeSnapshot = this.activatedRoute.snapshot;
    this.eventDetailsService.setEvent(routeSnapshot.params.name);
  }

}

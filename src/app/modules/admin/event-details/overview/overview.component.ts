import { Component, OnInit } from '@angular/core';
import {EventDetailsService} from '../services/event-details.service';
import {EventProfile} from '../../../../models/event.profile';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  eventProfile: EventProfile;

  constructor(
    private eventDetailsService: EventDetailsService
  ) { }

  ngOnInit(): void {
    this.eventDetailsService.getEvent().then(e => this.eventProfile = e.profile);
  }


}

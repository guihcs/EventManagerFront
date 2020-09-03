import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Event} from '../../../../models/event';
import {EventService} from '../../../../services/event/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventDetailsService {

  private currentEvent;
  private eventName;

  constructor(
    private eventService: EventService
  ) { }

  async getEvent(): Promise<Event> {
    if (!this.currentEvent){
      this.currentEvent = await this.eventService.queryEvent(this.eventName);
    }
    return this.currentEvent;
  }

  setEvent(name){
    this.eventName = name;
  }
}

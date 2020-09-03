import { Injectable } from '@angular/core';
import {Event} from '../../models/event';
import {EventProfile} from '../../models/event.profile';
import {SubEvent} from '../../models/sub.event';
import {EventLocation} from '../../models/event.location';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private http: HttpClient
  ) { }

  async publishEvent(event, profile): Promise<boolean> {
    let result:any = await this.http.post('', {
      profile,
      event
    }).toPromise();
    return result.status;
  }

  async queryEvent(eventName): Promise<Event> {
    return this.http.get<Event>('').toPromise();
  }


  async getCreatedEvents(user){
    return this.http.get<Event[]>('').toPromise();
  }

  async getSubscribedEvents(user){
    return this.http.get<Event[]>('').toPromise();
  }

  async subscribe(event, user): Promise<boolean>{
    let result:any = await this.http.post('', {
      user,
      event
    }).toPromise();
    return result.status;
  }

}

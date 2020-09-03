import {EventProfile} from './event.profile';
import {EventLocation} from './event.location';
import {SubEvent} from './sub.event';


export class Event {
  profile: EventProfile;
  location: EventLocation;
  subEvents: SubEvent[];
  status;
}

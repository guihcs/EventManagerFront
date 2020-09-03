import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../../services/event/event.service';
import {Event} from '../../models/event';
import {SubEventBuyComponent} from './sub-event-buy/sub-event-buy.component';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})
export class EventViewComponent implements OnInit, AfterViewInit {

  @ViewChildren(SubEventBuyComponent) subEvents!: QueryList<SubEventBuyComponent>;

  currentEvent: Event;
  subMap = new Map();
  subscribing = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let eventName = this.activatedRoute.snapshot.params.name;

    this.eventService.queryEvent(eventName)
      .then(e => this.currentEvent = e);
  }

  ngAfterViewInit(): void {
    this.subEvents.forEach(ev => console.log(ev.subEvent));
  }

  subscribe(event, count){
    this.subMap.set(event, count);
  }

  async confirmSubscription(){
    this.subscribing = true;
    if(await this.eventService.subscribe(this.buildSubscription(), this.auth.getProfile())){
      this.router.navigate(['/customer']);
    }else {
      this.subscribing = false;
    }

  }

  isLogged(): boolean{
    return true;
  }

  private buildSubscription(){
    let sub = [];

    for (const subKey of this.subMap.keys()) {
      sub.push({
        name: subKey.name,
        count: this.subMap.get(subKey)
      });
    }

    return {
      name: this.currentEvent.profile.name,
      sub
    };
  }

}

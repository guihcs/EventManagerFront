import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../../models/event';

@Component({
  selector: 'app-event-tumb',
  templateUrl: './event-tumb.component.html',
  styleUrls: ['./event-tumb.component.css']
})
export class EventTumbComponent implements OnInit {

  @Input('event') event: Event;

  constructor() { }

  ngOnInit(): void {
  }

}

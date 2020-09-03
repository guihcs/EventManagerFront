import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SubEvent} from '../../../models/sub.event';

@Component({
  selector: 'app-sub-event-buy',
  templateUrl: './sub-event-buy.component.html',
  styleUrls: ['./sub-event-buy.component.css']
})
export class SubEventBuyComponent implements OnInit {

  count = 0;
  @Input() subEvent: SubEvent;
  @Input() showControls: boolean = true;
  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  increase(){
    this.count += 1;
    this.countChange.emit(this.count);
  }


  decrease(){
    this.count -= 1;
    this.countChange.emit(this.count);
  }

}

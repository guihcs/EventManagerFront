import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventViewRoutingModule } from './event-view-routing.module';
import { SubEventBuyComponent } from './sub-event-buy/sub-event-buy.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
    declarations: [SubEventBuyComponent],
    exports: [
        SubEventBuyComponent
    ],
    imports: [
        CommonModule,
        EventViewRoutingModule,
        MatCardModule
    ]
})
export class EventViewModule { }
